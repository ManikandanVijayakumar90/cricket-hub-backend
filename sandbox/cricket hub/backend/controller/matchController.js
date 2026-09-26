const Match = require("../models/match");

const getMatches = async (req, res) => {
  try {
    const matches = await Match.find().populate("team1").populate("team2");
    res.status(200).json(matches);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to fetch matches",
    });
  }
};

const getMatch = async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) {
      return res.status(404).json({
        message: "Match not found",
      });
    }
    res.status(200).json(match);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to Fetch Match",
    });
  }
};

const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(200).json(match);
  } catch (error) {
    res.status(500).json({
      message: "Failed to create match",
      error: error.message,
    });
  }
};

const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndUpdate(req.params.id, req.body, {
      returnDocument: "after",
      runValidators: true,
    });
    if (!match) {
      return res.status(404).json({
        message: "Match Not Found",
      });
    }
    res.status(200).json(match);
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      message: "Failed to update the match",
      error: error.message,
    });
  }
};

const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByIdAndDelete(req.params.id);

    if (!match) {
      return res.status(404).json({
        message: "Match Not found",
        // error: error.message,
      });
    }
    res.status(200).json({
      message: "Match Deleted Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to Delete the match",
      error: error.message,
    });
  }
};
module.exports = {
  getMatches,
  getMatch,
  createMatch,
  updateMatch,
  deleteMatch,
};
