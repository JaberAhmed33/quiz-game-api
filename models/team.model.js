const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const teamSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    color: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

const Team = model("Team", teamSchema);
module.exports = Team;
