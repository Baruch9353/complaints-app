import express from 'express';
import { submitComplaint, adminComplaint } from '../controllers/complaintsController.js';

const router = express.Router();

// Route for submitting a new complaint
router.post('/submit', submitComplaint);

// Route for admin to view complaints
router.post('/admin', adminComplaint);

export default router;
