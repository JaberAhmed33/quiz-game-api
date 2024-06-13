const Category = require("../models/category.model");


getCategories = async (req, res) => {
    try {
        const data = await Category.find({}).populate("questionIds");
        res.status(200).json({ msg: "done", data });
      } catch (error) {
        res.status(400).json({ msg: "bad request" });
      }
}

getCategory = async (req, res) => {
  const catId = req.params.id;
    try {
        const data = await Category.findById(catId).populate("questionIds");
        res.status(200).json({ msg: "done", data });
      } catch (error) {
        res.status(400).json({ msg: "bad request" });
      }
}

addCategory = async (req, res) => {
  const { name } = req.body;
  
  try {
    if (!name) {
      res.status(400).json({ msg: "all fields are required" });
    }
    const data = await Category.create({ name });
    res.status(200).json({ msg: "done", data });
  } catch (error) {
    res.status(400).json({ msg: "bad request" });
  }
}

module.exports = {
  getCategories,
  getCategory,
  addCategory
}