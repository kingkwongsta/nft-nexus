import clientPromise from "../index";

let client, db, nfts;

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = await client.db("web3");
    nfts = await db.collection("nft_top_eth");
  } catch (error) {
    throw new Error(`No connection with database established - ${error}`);
  }
}

(async () => {
  await init();
})();

export async function getData(collection) {
  const collectionCapital = collection.capitalize();
  try {
    if (!nfts) await init();
    const query = { "contract.name": collectionCapital };
    const result = await nfts.findOne(query);
    return { nfts: result };
  } catch (error) {
    return { error: "Failed to fetch transactions!" };
  }
}
