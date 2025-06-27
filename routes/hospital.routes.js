const express = require('express');
const router = express.Router();

// Import controllers
const {
  createDoctor,
  getAllDoctors
} = require('../controllers/hospital/doctor.controller');

const {
  createPatient,
  getAllPatients
} = require('../controllers/hospital/patient.controller');

const {
  createRoom,
  getAllRooms
} = require('../controllers/hospital/room.controller');

// === Doctor Routes ===
router.post('/doctors', createDoctor);
router.get('/doctors', getAllDoctors);

// === Patient Routes ===
router.post('/patients', createPatient);
router.get('/patients', getAllPatients);

// === Room Routes ===
router.post('/rooms', createRoom);
router.get('/rooms', getAllRooms);

module.exports = router;
