'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
.readdirSync(__dirname)
.filter(file => {
  return (
    file.indexOf('.') !== 0 &&
    file !== basename &&
    file.slice(-3) === '.js' &&
    file.indexOf('.test.js') === -1
  );
})
.forEach(file => {
  const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

const dictionary = require('./dictionary')(sequelize, Sequelize.DataTypes);
db.dictionary = dictionary;
const dictionarynumber = require('./dictionarynumber')(sequelize, Sequelize.DataTypes);
db.dictionarynumber = dictionarynumber;
const About = require('./about')(sequelize, Sequelize.DataTypes);
db.abouts = About;
const Quiz = require('./quiz')(sequelize, Sequelize.DataTypes);
db.quizzes = Quiz;
const User = require('./user')(sequelize, Sequelize.DataTypes);
db.user = User;

module.exports = db;