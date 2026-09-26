const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    photo: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      required: true,
      trim: true,
    },

    battingStyle: {
      type: String,
      trim: true,
    },

    bowlingStyle: {
      type: String,
      trim: true,
    },
    country: {
      type: String,
      trim: true,
    },

    team: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Team",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Player", playerSchema);
