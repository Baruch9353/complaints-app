import { insertComplaint, getAllComplaints } from '../models/complaint.model.js';

// Handle user complaint submission
export async function submitComplaint(req, res) {
  const { category, message } = req.body;
  await insertComplaint({ category, content: message });
  res.json({ message: 'התלונה התקבלה' });
}

// Handle admin complaint review
export async function adminComplaint(req, res) {
  const { password } = req.body;
  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'סיסמה שגויה' });
  }
  const complaints = await getAllComplaints();
  res.json({ complaints });
}
