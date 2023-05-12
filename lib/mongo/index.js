import { MongoClient } from "mongodb";

const URI = process.env.URI;
const options = {};

if (!URI) throw new Error("Add Mongo URI to .env file");

let client = new MongoClient(URI, options);
let clientPromise;

if (process.env.NODE_ENV != "production") {
  if (!global._mongoClientPrmoise) {
    global._mongoClientPrmoise = client.connect();
  }
  clientPromise = global._mongoClientPrmoise;
} else {
  clientPromise = client.connect();
}

clientPromise.catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
  throw new Error("Failed to connect to MongoDB");
});

export default clientPromise;
