const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },   // e.g., "10th"
  section: { type: String },                     // e.g., "A"
  roomNumber: { type: String }                   // optional
});

module.exports = mongoose.model('SchoolClass', classSchema);
