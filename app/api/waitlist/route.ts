import {
  isTesterIntent,
  WAITLIST_FIELD_LIMITS,
} from "@/lib/waitlist";
import {
  createClient,
} from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type ErrorField =
  | "email"
  | "currentTool"
  | "pain"
  | "testerIntent";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const MAX_REQUEST_BYTES = 8_192;
const RATE_LIMIT_MAX_REQUESTS = 10;
const RATE_LIMIT_WINDOW_MS =
  10 * 60 * 1_000;
const MAX_RATE_LIMIT_ENTRIES = 5_000;

const rateLimitEntries = new Map<
  string,
  RateLimitEntry
>();

function jsonError(
  message: string,
  status: number,
  field?: ErrorField
) {
  return NextResponse.json(
    {
      message,
      ...(field ? { field } : {}),
    },
    {
      status,
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

function getClientKey(request: Request) {
  const forwardedFor =
    request.headers.get(
      "x-vercel-forwarded-for"
    ) ??
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip");

  return (
    forwardedFor?.split(",")[0]?.trim() ||
    "unknown"
  );
}

function checkRateLimit(request: Request) {
  const now = Date.now();
  const key = getClientKey(request);
  const current = rateLimitEntries.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitEntries.set(key, {
      count: 1,
      resetAt:
        now + RATE_LIMIT_WINDOW_MS,
    });
  } else if (
    current.count >=
    RATE_LIMIT_MAX_REQUESTS
  ) {
    return Math.max(
      1,
      Math.ceil(
        (current.resetAt - now) / 1_000
      )
    );
  } else {
    current.count += 1;
  }

  if (
    rateLimitEntries.size >
    MAX_RATE_LIMIT_ENTRIES
  ) {
    for (const [
      entryKey,
      entry,
    ] of rateLimitEntries) {
      if (
        entry.resetAt <= now ||
        rateLimitEntries.size >
          MAX_RATE_LIMIT_ENTRIES
      ) {
        rateLimitEntries.delete(entryKey);
      }
    }
  }

  return null;
}

async function readBodyWithLimit(
  request: Request
) {
  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let receivedBytes = 0;

  while (true) {
    const { done, value } =
      await reader.read();

    if (done) {
      break;
    }

    receivedBytes += value.byteLength;

    if (
      receivedBytes > MAX_REQUEST_BYTES
    ) {
      await reader.cancel();
      return null;
    }

    chunks.push(value);
  }

  const body = new Uint8Array(
    receivedBytes
  );
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return new TextDecoder("utf-8", {
      fatal: true,
    }).decode(body);
  } catch {
    return "";
  }
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    value
  );
}

export async function POST(
  request: Request
) {
  const retryAfter =
    checkRateLimit(request);

  if (retryAfter !== null) {
    return NextResponse.json(
      {
        message:
          "Too many requests. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "Cache-Control": "no-store",
          "Retry-After": String(retryAfter),
        },
      }
    );
  }

  const contentType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    .trim()
    .toLowerCase();

  if (
    contentType !== "application/json"
  ) {
    return jsonError(
      "Content-Type must be application/json.",
      415
    );
  }

  const contentLength = Number(
    request.headers.get("content-length")
  );

  if (
    Number.isFinite(contentLength) &&
    contentLength > MAX_REQUEST_BYTES
  ) {
    return jsonError(
      "Request body is too large.",
      413
    );
  }

  const rawBody =
    await readBodyWithLimit(request);

  if (rawBody === null) {
    return jsonError(
      "Request body is too large.",
      413
    );
  }

  let payload: Record<string, unknown>;

  try {
    const parsed: unknown =
      JSON.parse(rawBody);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      return jsonError(
        "Invalid request body.",
        400
      );
    }

    payload =
      parsed as Record<string, unknown>;
  } catch {
    return jsonError(
      "Invalid request body.",
      400
    );
  }

  const email =
    typeof payload.email === "string"
      ? payload.email.trim().toLowerCase()
      : "";

  const currentTool =
    typeof payload.currentTool === "string"
      ? payload.currentTool.trim()
      : "";

  const pain =
    typeof payload.pain === "string"
      ? payload.pain.trim()
      : "";

  const testerIntent =
    typeof payload.testerIntent === "string"
      ? payload.testerIntent.trim()
      : "";

  const website =
    typeof payload.website === "string"
      ? payload.website.trim()
      : "";

  const page =
    payload.page === "fi-paper"
      ? "fi-paper"
      : "paper";

  if (website) {
    return NextResponse.json(
      {
        message: "Joined waitlist.",
      },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  }

  if (
    email.length >
      WAITLIST_FIELD_LIMITS.email ||
    !isValidEmail(email)
  ) {
    return jsonError(
      "Please enter a valid email address.",
      400,
      "email"
    );
  }

  if (
    currentTool.length >
    WAITLIST_FIELD_LIMITS.currentTool
  ) {
    return jsonError(
      "Current tool is too long.",
      400,
      "currentTool"
    );
  }

  if (
    pain.length >
    WAITLIST_FIELD_LIMITS.pain
  ) {
    return jsonError(
      "Feedback is too long.",
      400,
      "pain"
    );
  }

  if (!isTesterIntent(testerIntent)) {
    return jsonError(
      "Please choose whether you're open to testing.",
      400,
      "testerIntent"
    );
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;

  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError(
      "Waitlist is not configured yet.",
      500
    );
  }

  const supabase = createClient(
    supabaseUrl,
    serviceRoleKey,
    {
      auth: {
        persistSession: false,
      },
    }
  );

  const { error } = await supabase
    .from("waitlist_submissions")
    .insert({
      email,
      current_tool: currentTool || null,
      pain: pain || null,
      tester_intent: testerIntent,
      source: "landing-page",
      product: "paper",
      page,
    });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        {
          message: "Joined waitlist.",
        },
        {
          headers: {
            "Cache-Control": "no-store",
          },
        }
      );
    }

    return jsonError(
      "Could not save your waitlist request.",
      500
    );
  }

  return NextResponse.json(
    {
      message: "Joined waitlist.",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}
