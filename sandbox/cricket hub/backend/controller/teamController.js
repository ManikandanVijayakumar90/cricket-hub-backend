const Team = require("../models/team");
const Player = require("../models/player");

const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch data",
      error: error.message,
    });
  }
};
const getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);

    if (!team) {
      return res.status(404).json({
        message: "Team Not Found",
      });
    }

    const players = await Player.find({
      team: req.params.id,
    });

    res.status(200).json({
      team,
      players,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the team",
      error: error.message,
    });
  }
};

const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json(team);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch the data",
      error: error.message,
    });
  }
};

const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!team) {
      return res.status(400).json({
        message: "Team not Found",
      });
    }
    res.status(200).json(team);
  } catch (error) {
    res.status(400).json({
      message: "Failed to updated the team",
      error: error.message,
    });
  }
};

const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) {
      return res.status(404).json({
        message: "Team Not Found",
      });
    }
    res.status(200).json({
      message: "Team Deleted Successfullly",
      team,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to Delete the team",
      error: error.message,
    });
  }
};
module.exports = {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
};
