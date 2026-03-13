import { NextResponse } from "next/server";
import { featuredProducts } from "@/lib/site";
import { getSupabaseServerClient } from "@/lib/supabase";

export async function GET() {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ products: featuredProducts, source: "local-fallback" });
  }

  const { data, error } = await supabase
    .from("products")
    .select("slug, name, subtitle, description, long_description, price, size, roast, notes, badge, ministry_use, palette")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    return NextResponse.json({ products: featuredProducts, source: "local-fallback", error: error.message });
  }

  return NextResponse.json({ products: data, source: "supabase" });
}
