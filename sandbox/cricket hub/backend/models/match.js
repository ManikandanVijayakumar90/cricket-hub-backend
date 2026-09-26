const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    team1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    team2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    matchDate: {
      type: Date,
      required: true,
    },

    matchType: {
      type: String,
      enum: ["T20", "ODI", "Test"],
      required: true,
    },

    status: {
      type: String,
      enum: ["Upcoming", "Live", "Completed"],
      default: "Upcoming",
    },

    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Match", matchSchema);
