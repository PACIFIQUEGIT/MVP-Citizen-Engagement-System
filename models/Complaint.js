const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  ticketId: String,
  fullName: String,
  email: String,
  phone: String,
  location: String,
  category: String,
  title: String,
  description: String,
  attachment: String,
  status: { type: String, default: 'Pending' },
  department: String, // <-- Add the department field
  submittedAt: Date
});

module.exports = mongoose.model('Complaint', complaintSchema);
