const Category = require("../models/category.model");
const Question = require("../models/question.model");

getQuestions = async (req, res) => {
  try {
    const data = await Question.find({}).populate("categoryId");
    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: "bad request" });
  }
};


getQuestion = async (req, res) => {
  const questionId = req.params.id;
  try {
    const data = await Question.findById(questionId).populate("categoryId");
    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: "bad request" });
  }
};

addQuestion = async (req, res) => {
  const { subCat, categoryId, timer, question, answer, img } = req.body;
  try {
    if (!subCat || !categoryId || !timer || !question ) {
      res.status(400).json({ msg: "all fields are required" });
    }


    const data = await Question.create({
      subCat,
      categoryId,
      timer,
      question,
      answer,
      img
    });

    const findCategory = await Category.findByIdAndUpdate({ _id: categoryId }, {
      $push: { questionIds: data._id }
    });

    console.log(findCategory);

    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: "bad request", error });
  }
};

removeQuestion = async (req, res) => {
  const questionId = req.params.id;
  try {
    const data = await Question.findByIdAndDelete(questionId);

    console.log(data);
    
    const findCategory = await Category.findByIdAndUpdate({ _id: data.categoryId }, {
      $pull: { questionIds: questionId }
    });

    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: "bad request", error });
  }
};

module.exports = { getQuestions, addQuestion, getQuestion, removeQuestion };
