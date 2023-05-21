import { getData } from "../../../../../lib/mongo/web3/collection";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { nfts } = await getData();
    return NextResponse.json(nfts);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
