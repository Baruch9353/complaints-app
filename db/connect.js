import { MongoClient } from 'mongodb';

let db;

export async function connectDB(uri) {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    db = client.db('complaintsDB'); 
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}

export function getDB() {
  return db;
}
