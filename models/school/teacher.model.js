const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  experience: { type: Number, default: 0 } // in years
});

module.exports = mongoose.model('SchoolTeacher', teacherSchema);
