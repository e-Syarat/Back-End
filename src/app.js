const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const router = require('./routes/index.js');
dotenv.config();
const app = express();
const path = require('path');

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/alfabet',express.static(path.join(__dirname, './public/alfabet')));
app.use('/number',express.static(path.join(__dirname, './public/number')));

//routes
app.use('/api', router);

module.exports = app;