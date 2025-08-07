import express from 'express';
import { getDB } from '../db/connect.js';

const router = express.Router();

router.get('/complaint.html', (req, res) => {
  res.sendFile('complaint.html', { root: 'public' });
});

router.post('/submit', async (req, res) => {
  const { category, content } = req.body;
  const db = getDB();

  try {
    await db.collection('complaintsDB').insertOne({
      category,
      content,
      date: new Date()
    });
    res.redirect('/thanks.html');
  } catch (err) {
    console.error('Error inserting to DB:', err);
    res.status(500).send('Error saving complaint');
  }
});

export default router;
