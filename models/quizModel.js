const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questionText: {
    type: String,
    required: true,
  },
  answerChoices: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

module.exports = mongoose.model("Quiz", quizSchema);