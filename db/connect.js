import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

let db;

const client = new MongoClient(MONGO_URI);

// Connect to MongoDB and store the database instance
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

// Return the current database instance
export function getDB() {
  return db;
}
