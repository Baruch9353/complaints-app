import { getDB } from '../db/connect.js';

// Insert a new complaint into the database
export async function insertComplaint({ category, content }) {
  const db = getDB();
  return db.collection('complaintsDB').insertOne({
    category,
    content,
    date: new Date().toLocaleString()
  });
}

// Retrieve all complaints from the database
export async function getAllComplaints() {
  const db = getDB();
  return db.collection('complaintsDB').find().toArray();
}
