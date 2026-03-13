import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { email?: string };
    const email = body.email?.trim().toLowerCase();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }

    const supabase = getSupabaseServerClient();

    if (!supabase) {
      return NextResponse.json(
        {
          message:
            "Supabase is not configured yet. Add your environment variables and run the SQL setup first.",
        },
        { status: 503 },
      );
    }

    const { error } = await supabase.from("newsletter_signups").upsert(
      {
        email,
        source: "website",
      },
      { onConflict: "email" },
    );

    if (error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: "You are on the list. We will be in touch soon." });
  } catch {
    return NextResponse.json({ message: "Unable to submit the form right now." }, { status: 500 });
  }
}
