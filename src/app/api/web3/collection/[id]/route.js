import { getData } from "./../../../../../../lib/mongo/web3/collection";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const collection = params.id;
  console.log(collection);
  try {
    const { nfts } = await getData(collection);
    return NextResponse.json(nfts);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
