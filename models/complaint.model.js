import { getDB } from '../db/connect.js';

export async function insertComplaint({ category, content }) {
  const db = getDB();
  return db.collection('complaintsDB').insertOne({
    category,
    content,
    date: new Date().toLocaleString()
  });
}

export async function getAllComplaints() {
  const db = getDB();
  return db.collection('complaintsDB').find().toArray();
}