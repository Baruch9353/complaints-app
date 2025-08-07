import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

let db;

const client = new MongoClient(MONGO_URI);

export async function connectDB() {
  try {
    await client.connect();
    db = client.db('complaintsDB');
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }
}

await connectDB();

export function getDB() {
  return db;
}
