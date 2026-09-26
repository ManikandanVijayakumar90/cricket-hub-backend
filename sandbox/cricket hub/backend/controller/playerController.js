const Player = require("../models/player");

// Get all players
const getPlayers = async (req, res) => {
  try {
    // const players = await Player.find();

    const players = await Player.find().populate("team");

    res.status(200).json(players);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch players",
      error: error.message,
    });
  }
};

// Get one player
const getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id).populate("team");

    if (!player) {
      return res.status(404).json({
        message: "Player not found",
      });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch player",
      error: error.message,
    });
  }
};

// Create player
const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);

    res.status(201).json(player);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create player",
      error: error.message,
    });
  }
};

// Update player
const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });

    if (!player) {
      return res.status(404).json({
        message: "Player not found",
      });
    }

    res.status(200).json(player);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update player",
      error: error.message,
    });
  }
};

// Delete player
const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.id);

    if (!player) {
      return res.status(404).json({
        message: "Player not found",
      });
    }

    res.status(200).json({
      message: "Player deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete player",
      error: error.message,
    });
  }
};

module.exports = {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
