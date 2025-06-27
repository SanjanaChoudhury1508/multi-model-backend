const Class = require('../../models/school/class.model');

// Create a new class
const createClass = async (req, res) => {
  try {
    const newClass = await Class.create(req.body);
    res.status(201).json(newClass);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all classes
const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createClass, getAllClasses };
