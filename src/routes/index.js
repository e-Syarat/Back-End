const express = require('express');
const {getAbout} = require('../controllers/about/about.js')
const{
    getDictionary,
    getDictionaryById
} = require('../controllers/dictionary/dictionary.js')
const {
    getDictionaryNumber,
    getDictionaryNumberById
} = require('../controllers/dictionary/dictionaryNumber.js')
const {login,
    register
} = require ('../controllers/user/login.js');
const { getQuiz } = require('../controllers/quiz/quiz.js');
const {rateLimit} = require('../middleware/rateLimiter.js');
const {authMiddleware} = require ('../middleware/authMiddleware.js');

const router = express.Router();

router.post('/register',register);
router.post('/login',login, rateLimit);
router.get('/about',getAbout);
router.get('/dictionary',authMiddleware, getDictionary );
router.get('/dictionary/:id', authMiddleware, getDictionaryById );
router.get('/dictionary-number', authMiddleware,  getDictionaryNumber);
router.get('/dictionary-number/:id', authMiddleware, getDictionaryNumberById);
router.get('/quiz', authMiddleware, getQuiz);

module.exports = router;
