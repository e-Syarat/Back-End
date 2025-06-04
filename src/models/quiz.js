'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class quiz extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  quiz.init({
    image: DataTypes.STRING,
    question:DataTypes.STRING,
    opsi1: DataTypes.STRING,
    opsi2: DataTypes.STRING,
    opsi3: DataTypes.STRING,
    opsi4: DataTypes.STRING,
    answer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'quiz',
    tableName: 'quizzes',
    timestamps: false
  });
  return quiz;
};