const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    questionIds: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question'
    }],
    img: {
      type: String,
    } 
  }
);

const Category = mongoose.models.Category || model("Category", categorySchema);

module.exports = Category;
