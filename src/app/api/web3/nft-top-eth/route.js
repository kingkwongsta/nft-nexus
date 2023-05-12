import { getData } from "../../../../../..lib/mongo/web3/top_nft_eth";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { nfts } = await getData();
    return NextResponse.json(nfts);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
