// models/dictionary.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class dictionary extends Model {
    static associate(models) {
      // define association here
    }
  }

  dictionary.init({
    image: DataTypes.STRING,
    alfabet: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dictionary',
    tableName: 'dictionary',
    timestamps: false
  });

  return dictionary;
};
