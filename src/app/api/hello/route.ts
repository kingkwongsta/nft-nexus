import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
  //   return NextResponse.json({ key: "value" });
}
