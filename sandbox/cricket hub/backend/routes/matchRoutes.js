const express = require("express");

const router = express.Router();

const {
  getMatches,
  createMatch,
  getMatch,
  updateMatch,
  deleteMatch,
} = require("../controller/matchController");

router.get("/", getMatches);
router.get("/:id", getMatch);
router.post("/", createMatch);
router.put("/:id", updateMatch);
router.delete("/:id", deleteMatch);
module.exports = router;
