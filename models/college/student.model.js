const mongoose = require('mongoose');

const collegeStudentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  course: { type: String },
  rollNumber: { type: String, unique: true },
  year: { type: Number }
});

module.exports = mongoose.model('CollegeStudent', collegeStudentSchema);
