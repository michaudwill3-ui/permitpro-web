import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  const { code } = await req.json();
  if (!code) return NextResponse.json({ valid: false });

  const { data, error } = await supabase
    .from("access_codes")
    .select("active")
    .eq("code", code)
    .single();

  if (error || !data || !data.active) {
    return NextResponse.json({ valid: false });
  }

  await supabase.from("access_logs").insert({ code });

  return NextResponse.json({ valid: true });
}
