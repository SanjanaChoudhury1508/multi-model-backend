const Professor = require('../../models/college/professor.model');

const createProfessor = async (req, res) => {
  try {
    const professor = await Professor.create(req.body);
    res.status(201).json(professor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllProfessors = async (req, res) => {
  try {
    const professors = await Professor.find();
    res.json(professors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createProfessor, getAllProfessors };
