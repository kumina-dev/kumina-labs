import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

type WaitlistPayload = {
  email?: unknown;
  currentTool?: unknown;
  pain?: unknown;
  testerIntent?: unknown;
  source?: unknown;
  product?: unknown;
  page?: unknown;
};

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let payload: WaitlistPayload;

  try {
    payload = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const email = getString(payload.email).toLowerCase();
  const currentTool = getString(payload.currentTool);
  const pain = getString(payload.pain);
  const testerIntent = getString(payload.testerIntent);
  const source = getString(payload.source) || "landing-page";
  const product = getString(payload.product) || "paper";
  const page = getString(payload.page) || "home";

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  if (!testerIntent) {
    return NextResponse.json(
      { message: "Please choose whether you're open to testing." },
      { status: 400 }
    );
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { message: "Waitlist is not configured yet." },
      { status: 500 }
    );
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
    },
  });

  const { error } = await supabase.from("waitlist_submissions").upsert(
    {
      email,
      current_tool: currentTool || null,
      pain: pain || null,
      tester_intent: testerIntent,
      source,
      product,
      page,
    },
    {
      onConflict: "email",
    }
  );

  if (error) {
    return NextResponse.json(
      { message: "Could not save your waitlist request." },
      { status: 500 }
    );
  }

  return NextResponse.json({
    message: "Joined waitlist.",
  });
}