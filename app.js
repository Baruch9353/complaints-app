import express from 'express';
import dotenv from 'dotenv';
import complaintsRouter from './routes/complaints.js';

dotenv.config();

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/', complaintsRouter);

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
