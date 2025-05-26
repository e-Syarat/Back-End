'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dictionary', [
      {
        image: 'A.png',
        alfabet: 'A',
      },
      {
        image: 'B.png',
        alfabet: 'B',
      },
      {
        image: 'C.png',
        alfabet: 'C',
      },
      {
        image: 'D.png',
        alfabet: 'D',
      },
      {
        image: 'E.png',
        alfabet: 'E',
      },
      {
        image: 'F.png',
        alfabet: 'F',
      },
      {
        image: 'G.png',
        alfabet: 'G',
      },
      {
        image: 'H.png',
        alfabet: 'H',
      },
      {
        image: 'I.png',
        alfabet: 'I',
      },
      {
        image: 'J.png',
        alfabet: 'J',
      },
      {
        image: 'K.png',
        alfabet: 'K',
      },
      {
        image: 'L.png',
        alfabet: 'L',
      },
      {
        image: 'M.png',
        alfabet: 'M',
      },
      {
        image: 'N.png',
        alfabet: 'N',
      },
      {
        image: 'O.png',
        alfabet: 'O',
      },
      {
        image: 'P.png',
        alfabet: 'P',
      },
      {
        image: 'Q.png',
        alfabet: 'Q',
      },
      {
        image: 'R.png',
        alfabet: 'R',
      },
      {
        image: 'S.png',
        alfabet: 'S',
      },
      {
        image: 'T.png',
        alfabet: 'T',
      },
      {
        image: 'U.png',
        alfabet: 'U',
      },
      {
        image: 'V.png',
        alfabet: 'V',
      },
      {
        image: 'W.png',
        alfabet: 'W',
      },
      {
        image: 'X.png',
        alfabet: 'X',
      },
      {
        image: 'Y.png',
        alfabet: 'Y',
      },
      {
        image: 'Z.png',
        alfabet: 'Z',
      },
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
