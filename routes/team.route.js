const express = require("express");
const { getTeams, addTeam, getTeam, editTeam } = require("../controllers/team.controller");

const router = express.Router();

router.get("/", getTeams);
router.post("/addTeam", addTeam);
router.get("/:id", getTeam);
router.patch("/edit/:id", editTeam);

module.exports = router;
