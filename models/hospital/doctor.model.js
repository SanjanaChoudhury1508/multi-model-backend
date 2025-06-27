const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialization: { type: String },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Doctor', doctorSchema);
