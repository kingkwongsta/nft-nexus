import clientPromise from "../index";

let client: any, db: any, nfts: any;

//Initialize connection to web3 database
async function init(): Promise<void> {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("web3");
    nfts = await db.collection("eth_top_sales");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async (): Promise<void> => {
  await init();
})();

//Fetch data if database connection is initiated
export async function getData(): Promise<{ nfts?: any[]; error?: string }> {
  try {
    if (!nfts) await init();
    const result = await nfts.find({}).toArray();
    return { nfts: result };
  } catch (error) {
    return { error: "Failed to fetch nft data" };
  }
}
