const express = require("express");
const router = express.Router();

const {
  getTeams,
  getTeam,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controller/teamController");

router.get("/", getTeams);

router.get("/:id", getTeam);

router.post("/", createTeam);

router.put("/:id", updateTeam);

router.patch("/:id", updateTeam);

router.delete("/:id", deleteTeam);

module.exports = router;
