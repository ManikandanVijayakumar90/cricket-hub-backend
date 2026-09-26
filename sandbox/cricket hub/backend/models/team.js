const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    shortName: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    logo: {
      type: String,
      trim: true,
    },

    coach: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Team", teamSchema);
