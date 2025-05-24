'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('dictionary', [
      {
        image: '../public/alfabet/A.png',
        alfabet: 'A',
      },
      {
        image: '../public/alfabet/B.png',
        alfabet: 'B',
      },
      {
        image: '../public/alfabet/C.png',
        alfabet: 'C',
      },
      {
        image: '../public/alfabet/D.png',
        alfabet: 'D',
      },
      {
        image: '../public/alfabet/E.png',
        alfabet: 'E',
      },
      {
        image: '../public/alfabet/F.png',
        alfabet: 'F',
      },
      {
        image: '../public/alfabet/G.png',
        alfabet: 'G',
      },
      {
        image: '../public/alfabet/H.png',
        alfabet: 'H',
      },
      {
        image: '../public/alfabet/I.png',
        alfabet: 'I',
      },
      {
        image: '../public/alfabet/J.png',
        alfabet: 'J',
      },
      {
        image: '../public/alfabet/K.png',
        alfabet: 'K',
      },
      {
        image: '../public/alfabet/L.png',
        alfabet: 'L',
      },
      {
        image: '../public/alfabet/M.png',
        alfabet: 'M',
      },
      {
        image: '../public/alfabet/N.png',
        alfabet: 'N',
      },
      {
        image: '../public/alfabet/O.png',
        alfabet: 'O',
      },
      {
        image: '../public/alfabet/P.png',
        alfabet: 'P',
      },
      {
        image: '../public/alfabet/Q.png',
        alfabet: 'Q',
      },
      {
        image: '../public/alfabet/R.png',
        alfabet: 'R',
      },
      {
        image: '../public/alfabet/S.png',
        alfabet: 'S',
      },
      {
        image: '../public/alfabet/T.png',
        alfabet: 'T',
      },
      {
        image: '../public/alfabet/U.png',
        alfabet: 'U',
      },
      {
        image: '../public/alfabet/V.png',
        alfabet: 'V',
      },
      {
        image: '../public/alfabet/W.png',
        alfabet: 'W',
      },
      {
        image: '../public/alfabet/X.png',
        alfabet: 'X',
      },
      {
        image: '../public/alfabet/Y.png',
        alfabet: 'Y',
      },
      {
        image: '../public/alfabet/Z.png',
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
