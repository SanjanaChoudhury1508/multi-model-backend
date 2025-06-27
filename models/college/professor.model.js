const mongoose = require('mongoose');

const professorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  department: { type: String },
  email: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('CollegeProfessor', professorSchema);
