import express from 'express';
import dotenv from 'dotenv';
import router from './routes/complaints.js';

dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', router);

// Error handling for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
