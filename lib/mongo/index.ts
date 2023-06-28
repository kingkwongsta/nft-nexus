import { MongoClient } from "mongodb";

const URI = process.env.URI;
const options = {};

if (!URI) throw new Error("Add Mongo URI to .env file");

let client = new MongoClient(URI, options);
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV !== "production") {
  if (!(global as any)._mongoClientPromise) {
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

clientPromise.catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  throw new Error("Failed to connect to MongoDB");
});

export default clientPromise;
