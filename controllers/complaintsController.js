import { getDB } from '../db/connect.js';

export async function submitComplaint(req, res) {
  const { category, content } = req.body;
  const db = getDB();
  await db.collection('complaintsDB').insertOne({category,content,date: new Date()});
  res.json({ success: true, message: 'התלונה התקבלה' });
}
