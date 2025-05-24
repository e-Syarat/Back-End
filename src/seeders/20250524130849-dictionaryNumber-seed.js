'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dictionarynumbers',[
      {
        image: '../public/number/1.png',
        number: '1',
      },
      {
        image: '../public/number/2.png',
        number: '2',
      },
      {
        image: '../public/number/3.png',
        number: '3',
      },
      {
        image: '../public/number/4.png',
        number: '4',
      },
      {
        image: '../public/number/5.png',
        number: '5',
      },
      {
        image: '../public/number/6.png',
        number: '6',
      },
      {
        image: '../public/number/7.png',
        number: '7',
      },
      {
        image: '../public/number/8.png',
        number: '8',
      },
      {
        image: '../public/number/9.png',
        number: '9',
      },
      {
        image: '../public/number/10.png',
        number: '10',
      },
    ])
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
