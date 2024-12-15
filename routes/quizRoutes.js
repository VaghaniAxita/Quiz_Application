const express = require('express');
const {
  getAllQuizzes,
  getQuizById,
  createQuiz,
  updateQuiz,
  deleteQuiz,
  submitQuiz,
} = require('../controllers/quizController');
// const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', getAllQuizzes);
router.get('/:id', getQuizById);
router.post('/', createQuiz);
router.put('/:id',updateQuiz); 
router.delete('/:id',deleteQuiz);
router.post('/:id/submit', submitQuiz);

module.exports = router;
