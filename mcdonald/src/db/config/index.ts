import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.NEXT_PUBLIC_MONGO_URI as string
const dbName = process.env.NEXT_PUBLIC_MONGO_DB_NAME || "mcdonald"; 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = client.db(dbName);
