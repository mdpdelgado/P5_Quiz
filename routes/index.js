const express = require('express');
const router = express.Router();

var quizController = require('../controllers/quiz');

// GET home page.
router.get('/', (req, res, next) => {
  res.render('index');
});

// Author page.
router.get('/credits', (req, res, next) => {
    res.render('credits');
});
//Autoload for routes using :quizId
router.param('quizId', quizController.load);

//Routes for the resource quizzes
router.get('/quizzes',                     quizController.index);
router.get('/quizzes/:quizId(\\d+)',       quizController.show);
router.get('/quizzes/new',                 quizController.new);
router.post('/quizzes',                    quizController.create);
router.get('/quizzes/:quizId(\\d+)/edit',  quizController.edit);
router.put('/quizzes/:quizId(\\d+)',       quizController.update);
router.delete('/quizzes/:quizId(\\d+)',    quizController.destroy);
router.get('/quizzes/:quizId(\\d+)/play',  quizController.play);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);

module.exports = router;
