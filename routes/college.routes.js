const express = require('express');
const router = express.Router();

// Import controllers
const {
  createProfessor,
  getAllProfessors
} = require('../controllers/college/professor.controller');

const {
  createCollegeStudent,
  getAllCollegeStudents
} = require('../controllers/college/student.controller');

const {
  createCourse,
  getAllCourses
} = require('../controllers/college/course.controller');

// === Professor Routes ===
router.post('/professors', createProfessor);
router.get('/professors', getAllProfessors);

// === Student Routes ===
router.post('/students', createCollegeStudent);
router.get('/students', getAllCollegeStudents);

// === Course Routes ===
router.post('/courses', createCourse);
router.get('/courses', getAllCourses);

module.exports = router;
