import clientPromise from "../index";

const init = async () => {
  // Check if the database is already initialized
  if (db) return;

  // Create a MongoClient instance
  const client = await clientPromise;

  // Connect to the database
  const db = await client.db("web3");

  // Get the collection
  const nfts = await db.collection("nft_top_eth");

  // Return the collection
  return nfts;
};

export async function getData() {
  // Initialize the database
  const nfts = await init();

  // Find all documents in the collection
  const result = await nfts.find({}).toArray();

  // Return the results
  return { nfts: result };
}
