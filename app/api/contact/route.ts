import type { ContactField } from "@/lib/contact";
import {
  CONTACT_FIELD_LIMITS,
  isValidEmail,
} from "@/lib/contact";
import type { Locale } from "@/lib/site";
import { siteConfig } from "@/lib/site";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name: string;
  email: string;
  businessName: string;
  currentWebsite: string;
  message: string;
  company: string;
  locale: Locale;
  startedAt: number;
};

const MAX_REQUEST_BYTES = 12_288;
const RATE_LIMIT_MAX_REQUESTS = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const MAX_RATE_LIMIT_ENTRIES = 5_000;
const MIN_FORM_COMPLETION_MS = 800;
const rateLimitEntries = new Map<string, RateLimitEntry>();

function jsonError(
  message: string,
  status: number,
  field?: ContactField
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

function successResponse() {
  return NextResponse.json(
    {
      message: "Enquiry sent.",
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    }
  );
}

function getClientKey(request: Request) {
  const forwardedFor =
    request.headers.get("x-vercel-forwarded-for") ??
    request.headers.get("x-forwarded-for") ??
    request.headers.get("x-real-ip");

  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function checkRateLimit(request: Request) {
  const now = Date.now();
  const key = getClientKey(request);
  const current = rateLimitEntries.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitEntries.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
  } else if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.max(
      1,
      Math.ceil((current.resetAt - now) / 1_000)
    );
  } else {
    current.count += 1;
  }

  if (rateLimitEntries.size > MAX_RATE_LIMIT_ENTRIES) {
    for (const [entryKey, entry] of rateLimitEntries) {
      if (
        entry.resetAt <= now ||
        rateLimitEntries.size > MAX_RATE_LIMIT_ENTRIES
      ) {
        rateLimitEntries.delete(entryKey);
      }
    }
  }

  return null;
}

async function readBodyWithLimit(request: Request) {
  if (!request.body) {
    return "";
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let receivedBytes = 0;

  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    receivedBytes += value.byteLength;

    if (receivedBytes > MAX_REQUEST_BYTES) {
      await reader.cancel();
      return null;
    }

    chunks.push(value);
  }

  const body = new Uint8Array(receivedBytes);
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

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getPayload(
  value: Record<string, unknown>
): ContactPayload {
  return {
    name: getString(value.name),
    email: getString(value.email).toLowerCase(),
    businessName: getString(value.businessName),
    currentWebsite: getString(value.currentWebsite),
    message: getString(value.message),
    company: getString(value.company),
    locale: value.locale === "fi" ? "fi" : "en",
    startedAt:
      typeof value.startedAt === "number"
        ? value.startedAt
        : 0,
  };
}

function looksLikeSpam(payload: ContactPayload) {
  const combined = `${payload.name}\n${payload.businessName}\n${payload.message}`;
  const urls =
    combined.match(/https?:\/\/|www\./gi)?.length ?? 0;
  const repeatedCharacters = /(.)\1{19,}/u.test(combined);
  const finishedTooFast =
    !Number.isFinite(payload.startedAt) ||
    payload.startedAt <= 0 ||
    Date.now() - payload.startedAt <
      MIN_FORM_COMPLETION_MS;

  return (
    payload.company.length > 0 ||
    urls > 3 ||
    repeatedCharacters ||
    finishedTooFast
  );
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character
  );
}

function buildNotificationEmail(payload: ContactPayload) {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const businessName = escapeHtml(
    payload.businessName || "Not provided"
  );
  const currentWebsite = escapeHtml(
    payload.currentWebsite || "Not provided"
  );
  const message = escapeHtml(payload.message).replace(
    /\n/g,
    "<br />"
  );
  const subjectBusiness = payload.businessName
    ? ` · ${payload.businessName}`
    : "";

  return {
    subject: `New website enquiry from ${payload.name}${subjectBusiness}`,
    text: [
      "New website enquiry",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Business: ${payload.businessName || "Not provided"}`,
      `Current website or social profile: ${
        payload.currentWebsite || "Not provided"
      }`,
      `Language: ${payload.locale.toUpperCase()}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
    html: `
      <!doctype html>
      <html lang="en">
        <body style="margin:0;background:#f2eee7;color:#20170d;font-family:Arial,sans-serif;padding:32px 16px;">
          <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #ded5c8;border-radius:20px;overflow:hidden;">
            <div style="background:#17110b;color:#f7efe2;padding:28px 32px;">
              <p style="margin:0 0 8px;color:#e5a64d;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">
                Kumina Labs
              </p>
              <h1 style="margin:0;font-size:26px;line-height:1.2;">
                New website enquiry
              </h1>
            </div>

            <div style="padding:30px 32px;">
              <table role="presentation" style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
                <tr>
                  <td style="width:170px;padding:8px 0;color:#786b5c;vertical-align:top;">
                    Name
                  </td>
                  <td style="padding:8px 0;font-weight:600;">
                    ${name}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#786b5c;vertical-align:top;">
                    Email
                  </td>
                  <td style="padding:8px 0;">
                    <a href="mailto:${email}" style="color:#8a5a18;">
                      ${email}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#786b5c;vertical-align:top;">
                    Business
                  </td>
                  <td style="padding:8px 0;">
                    ${businessName}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#786b5c;vertical-align:top;">
                    Current presence
                  </td>
                  <td style="padding:8px 0;">
                    ${currentWebsite}
                  </td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#786b5c;vertical-align:top;">
                    Language
                  </td>
                  <td style="padding:8px 0;">
                    ${payload.locale.toUpperCase()}
                  </td>
                </tr>
              </table>

              <div style="margin-top:24px;border-top:1px solid #e6ded3;padding-top:24px;">
                <p style="margin:0 0 10px;color:#786b5c;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;">
                  Message
                </p>
                <p style="margin:0;font-size:16px;line-height:1.7;">
                  ${message}
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  };
}

export async function POST(request: Request) {
  const retryAfter = checkRateLimit(request);

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

  const requestOrigin = new URL(request.url).origin;
  const origin = request.headers.get("origin");

  if (origin && origin !== requestOrigin) {
    return jsonError("Invalid request origin.", 403);
  }

  const contentType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    .trim()
    .toLowerCase();

  if (contentType !== "application/json") {
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
    return jsonError("Request body is too large.", 413);
  }

  const rawBody = await readBodyWithLimit(request);

  if (rawBody === null) {
    return jsonError("Request body is too large.", 413);
  }

  let value: Record<string, unknown>;

  try {
    const parsed: unknown = JSON.parse(rawBody);

    if (
      !parsed ||
      typeof parsed !== "object" ||
      Array.isArray(parsed)
    ) {
      return jsonError("Invalid request body.", 400);
    }

    value = parsed as Record<string, unknown>;
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  const payload = getPayload(value);

  if (looksLikeSpam(payload)) {
    return successResponse();
  }

  if (
    !payload.name ||
    payload.name.length > CONTACT_FIELD_LIMITS.name
  ) {
    return jsonError(
      "Please enter your name.",
      400,
      "name"
    );
  }

  if (
    !payload.email ||
    payload.email.length > CONTACT_FIELD_LIMITS.email ||
    !isValidEmail(payload.email)
  ) {
    return jsonError(
      "Please enter a valid email address.",
      400,
      "email"
    );
  }

  if (
    payload.businessName.length >
    CONTACT_FIELD_LIMITS.businessName
  ) {
    return jsonError(
      "Business name is too long.",
      400,
      "businessName"
    );
  }

  if (
    payload.currentWebsite.length >
    CONTACT_FIELD_LIMITS.currentWebsite
  ) {
    return jsonError(
      "Website address is too long.",
      400,
      "currentWebsite"
    );
  }

  if (
    !payload.message ||
    payload.message.length > CONTACT_FIELD_LIMITS.message
  ) {
    return jsonError(
      "Please explain briefly what you need.",
      400,
      "message"
    );
  }

  const supabaseUrl =
    process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey =
    process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonError(
      "Contact storage is not configured.",
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

  const { data: enquiry, error: insertError } =
    await supabase
      .from("contact_inquiries")
      .insert({
        name: payload.name,
        email: payload.email,
        business_name: payload.businessName || null,
        current_website:
          payload.currentWebsite || null,
        message: payload.message,
        locale: payload.locale,
        notification_status: resendApiKey
          ? "pending"
          : "not_configured",
      })
      .select("id")
      .single();

  if (insertError || !enquiry) {
    return jsonError(
      "Could not save the enquiry.",
      500
    );
  }

  if (!resendApiKey) {
    return jsonError(
      "Email notification is not configured.",
      503
    );
  }

  const email = buildNotificationEmail(payload);

  const resendResponse = await fetch(
    "https://api.resend.com/emails",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `contact-${enquiry.id}`,
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM_EMAIL ||
          "Kumina Labs Website <onboarding@resend.dev>",
        to: [siteConfig.contactEmail],
        reply_to: payload.email,
        subject: email.subject,
        html: email.html,
        text: email.text,
        tags: [
          {
            name: "source",
            value: "website-contact",
          },
          {
            name: "locale",
            value: payload.locale,
          },
        ],
      }),
    }
  );

  await supabase
    .from("contact_inquiries")
    .update({
      notification_status: resendResponse.ok
        ? "sent"
        : "failed",
      notification_sent_at: resendResponse.ok
        ? new Date().toISOString()
        : null,
    })
    .eq("id", enquiry.id);

  if (!resendResponse.ok) {
    return jsonError(
      "Could not send the email notification.",
      502
    );
  }

  return successResponse();
}
