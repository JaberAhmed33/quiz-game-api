const Team = require("../models/team.model");

getTeams = async (req, res) => {
    try {
        const data = await Team.find({});
        res.status(200).json({ msg: "done", data });
      } catch (error) {
        res.status(400).json({ msg: "bad request", error });
 }
}

getTeam = async (req, res) => {
    const teamId = req.params.id;
    try {
        const data = await Team.findById(teamId);
        res.status(200).json({ msg: "done", data });
      } catch (error) {
        res.status(400).json({ msg: "bad request" });
 }
}

addTeam = async (req, res) => {
  const dataArray = req.body;

  try {

    if (!dataArray ) {
      res.status(400).json({ msg: "all fields are required" });
    }

    const data = await Team.insertMany(dataArray);
    res.status(200).json({ msg: "done", data });
    } catch (error) {
      res.status(400).json({ msg: "bad request", error });
  }
}

editTeam = async (req, res) => {
    const teamId = req.params.id;
    const { points } = req.body;
    try {
      const data = await Team.findByIdAndUpdate({ _id: teamId }, { points });
      res.status(200).json({ msg: "done", data });
    } catch (error) {
      res.status(400).json({ msg: "bad request", error });
    }
  }

module.exports = {
    getTeams,
    addTeam,
    getTeam,
    editTeam
};
