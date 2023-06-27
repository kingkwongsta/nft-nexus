import { getData } from "./../../../../../lib/mongo/web3/eth_top_sales";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { nfts } = await getData();
    return NextResponse.json(nfts);
  } catch (error) {
    return NextResponse.json({ error });
  }
  // return new Response("Hello, Next.js!");
}
