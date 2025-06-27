const Room = require('../../models/hospital/room.model');

const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(201).json(room);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRoom, getAllRooms };
