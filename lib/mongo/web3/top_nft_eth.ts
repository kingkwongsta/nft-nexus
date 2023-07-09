import clientPromise from "../index";

let client: any, db: any, nfts: any;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("web3");
    nfts = await db.collection("nft_top_eth");
    console.log("successfully connected to web3/nft_top_eth");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getData() {
  try {
    if (!nfts) await init();
    const result = await nfts.find({}).toArray();
    console.log("successfully getData from web3/nft_top_eth");
    return { nfts: result };
  } catch (error) {
    return { error: "Failed to fetch transactions!" };
  }
}
