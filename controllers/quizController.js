const Quiz = require("../models/quizModel");

const getAllQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quizzes", error });
  }
};

const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quiz", error });
  }
};

const createQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const quiz = await Quiz.create({ title, description, questions });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ message: "Error creating quiz", error });
  }
};

const submitQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: "Quiz not found" });

    const { answers } = req.body;
    let score = 0;

    quiz.questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        score++;
      }
    });

    res.status(200).json({ score, totalQuestions: quiz.questions.length });
  } catch (error) {
    res.status(400).json({ message: "Error submitting quiz", error });
  }
};

const updateQuiz = async (req, res) => {
  try {
    const { title, description, questions } = req.body;
    const quiz = await Quiz.findByIdAndUpdate(
      req.params.id,
      { title, description, questions },
      { new: true, runValidators: true }
    );

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json(quiz);
  } catch (error) {
    res.status(400).json({ message: "Error updating quiz", error });
  }
};

const deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);

    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }

    res.status(200).json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting quiz", error });
  }
};

module.exports = {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  submitQuiz,
  updateQuiz,
  deleteQuiz,
};
