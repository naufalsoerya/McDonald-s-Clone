import { MongoClient, ServerApiVersion } from "mongodb";
const uri: any = process.env.MONGO_URI
const dbName = process.env.MONGO_DB_NAME || "McDonald"; 

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const db = client.db(dbName);