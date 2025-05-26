'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dictionarynumbers', [
      { image: '1.png', number: '1' },
      { image: '2.png', number: '2' },
      { image: '3.png', number: '3' },
      { image: '4.png', number: '4' },
      { image: '5.png', number: '5' },
      { image: '6.png', number: '6' },
      { image: '7.png', number: '7' },
      { image: '8.png', number: '8' },
      { image: '9.png', number: '9' },
      { image: '10.png', number: '10' },
    ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('dictionarynumbers', null, {});
  }
};
