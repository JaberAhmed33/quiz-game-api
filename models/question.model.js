const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const questionSchema = new Schema(
  {
    subCat:
      {
        type: String,
        required: true,
      },
      categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      },
      timer: {
        type: Number,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answer: {
        type: String,
        required: true,
      },
      img: {
        type: String,
      },
  },
  { timestamps: true }
);

const Question = model("Question", questionSchema);
module.exports = Question;
