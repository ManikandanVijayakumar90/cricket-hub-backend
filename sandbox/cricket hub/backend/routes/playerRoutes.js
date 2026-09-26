const express = require("express");
const router = express.Router();

const {
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controller/playerController");

//GetAllPlayer
router.get("/", getPlayers);

//GetOnePlayer
router.get("/:id", getPlayer);

//CreatePlayers
router.post("/", createPlayer);

//updatePlayers
router.put("/:id", updatePlayer);

//deletePlayer
router.delete("/:id", deletePlayer);

module.exports = router;
