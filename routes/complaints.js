import express from 'express';
import { submitComplaint, adminComplaint } from '../controllers/complaintsController.js';

const router = express.Router();

router.post('/submit', submitComplaint);
router.post('/admin', adminComplaint);

export default router;
