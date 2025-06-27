const express = require('express');
const router = express.Router();

// Import controllers
const {
  createTeacher,
  getAllTeachers
} = require('../controllers/school/teacher.controller');

const {
  createStudent,
  getAllStudents
} = require('../controllers/school/student.controller');

const {
  createClass,
  getAllClasses
} = require('../controllers/school/class.controller');

// === Teacher Routes ===
router.post('/teachers', createTeacher);
router.get('/teachers', getAllTeachers);

// === Student Routes ===
router.post('/students', createStudent);
router.get('/students', getAllStudents);

// === Class Routes ===
router.post('/classes', createClass);
router.get('/classes', getAllClasses);

module.exports = router;
