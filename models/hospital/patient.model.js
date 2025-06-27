const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  admitted: { type: Boolean, default: false },
  disease: String
});

module.exports = mongoose.model('Patient', patientSchema);
