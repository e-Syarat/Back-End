'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.STRING
      },
      question:{
      type: Sequelize.STRING
      },
      opsi1: {
        type: Sequelize.STRING
      },
      opsi2: {
        type: Sequelize.STRING
      },
      opsi3: {
        type: Sequelize.STRING
      },
      opsi4: {
        type: Sequelize.STRING
      },
      answer:{
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quizzes');
  }
};