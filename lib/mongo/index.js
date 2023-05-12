import { MongoClient } from "mongodb";

const URI = process.env.URI;
const options = {};

if (!URI) throw new Error("Add Mongo URI to .env.local");

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

export default clientPromise;
