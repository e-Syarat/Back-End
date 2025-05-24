const express = require('express');
const {getAbout} = require('../controllers/about/about.js')
const{getDictionary, getDictionaryById} = require('../controllers/dictionary/dictionary.js')
const {getDictionaryNumber, getDictionaryNumberById} = require('../controllers/dictionary/dictionaryNumber.js')
const router = express.Router();


router.get('/about',getAbout);
router.get('/dictionary', getDictionary);
router.get('/dictionary/:id', getDictionaryById);
router.get('/dictionary-number', getDictionaryNumber);
router.get('/dictionary-number/:id', getDictionaryNumberById);

module.exports = router;
