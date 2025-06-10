'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dictionarynumber extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dictionarynumber.init({
    image: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'dictionarynumber',
    tableName: 'dictionaryNumbers',
    timestamps: false
  });
  return dictionarynumber;
};