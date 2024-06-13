const express = require("express");
const { getQuestions, addQuestion, getQuestion, removeQuestion } = require("../controllers/question.controller");

const router = express.Router();

router.get("/", getQuestions);
router.post("/addQuestion", addQuestion);
router.get("/:id", getQuestion);
router.delete("/remove/:id", removeQuestion);
module.exports = router;
