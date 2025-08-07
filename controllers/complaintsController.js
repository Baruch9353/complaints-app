export function submitComplaint(req, res) {
  const { category, message } = req.body;
  console.log(`Complaint received: [${category}] ${message}`);

  res.send(`
    <h2>תודה על שליחת התלונה!</h2>
    <a href="/">חזרה לדף הבית</a>
  `);
}

export function adminLogin(req, res) {
  const { password } = req.body;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';

  if (password === ADMIN_PASSWORD) {
    res.send(`<h2>ברוך הבא, מפקד!</h2><p>כאן יוצגו התלונות בעתיד.</p>`);
  } else {
    res.send(`<h2>סיסמה שגויה!</h2><a href="/">נסה שוב</a>`);
  }
}
