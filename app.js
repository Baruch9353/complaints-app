import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import complaintsRouter from './routes/complaints.js';
import { connectDB } from './db/connect.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
connectDB(MONGO_URI);
const app = express();
const PORT = process.env.PORT || 3000;

// כדי שנוכל להשתמש ב־__dirname עם ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Middleware
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Form data
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', complaintsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
