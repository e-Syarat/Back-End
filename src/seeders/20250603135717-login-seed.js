'use strict';
const { hashpw } = require('../utils/hashpw');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await hashpw('123456');
   return queryInterface.bulkInsert('users', [
      {
        username: 'user@gmail.com',
        password: hashedPassword,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
