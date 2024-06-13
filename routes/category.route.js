const express = require("express");
const { getCategories, getCategory, addCategory } = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.post("/addCategory", addCategory);

module.exports = router;
