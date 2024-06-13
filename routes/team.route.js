const express = require("express");
const { getTeams, addTeam, getTeam } = require("../controllers/team.controller");

const router = express.Router();

router.get("/", getTeams);
router.post("/addTeam", addTeam);
router.get("/:id", getTeam);

module.exports = router;
