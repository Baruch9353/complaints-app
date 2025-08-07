import mongoose from 'mongoose';

const complaintSchema = new mongoose.Schema({
  category: {
    type: String,
    enum: ['אוכל', 'ציוד', 'פקודות', 'אחר'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Complaint = mongoose.model('Complaint', complaintSchema);

export default Complaint;
