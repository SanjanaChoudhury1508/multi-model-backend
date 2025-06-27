const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  type: { type: String, enum: ['General', 'ICU', 'Private'], default: 'General' },
  isOccupied: { type: Boolean, default: false }
});

module.exports = mongoose.model('Room', roomSchema);
