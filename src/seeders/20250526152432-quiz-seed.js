'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('quizzes',[
  {
    "image": "A.png",
    "question": "Huruf apakah yang ada pada gambar di atas?",
    "opsi1": "B",
    "opsi2": "C",
    "opsi3": "A",
    "opsi4": "D",
    "answer": "C"
  },
  {
    "image": "B.png",
    "question": "Huruf apakah yang ada pada gambar di atas?",
    "opsi1": "A",
    "opsi2": "B",
    "opsi3": "D",
    "opsi4": "C",
    "answer": "B"
  },
  {
    "image": "D.png",
    "question": "Huruf apakah yang ada pada gambar di atas?",
    "opsi1": "D",
    "opsi2": "A",
    "opsi3": "C",
    "opsi4": "B",
    "answer": "A"
  },
  {
    "image": "E.png",
    "question": "Huruf apakah yang ada pada gambar di atas?",
    "opsi1": "F",
    "opsi2": "G",
    "opsi3": "E",
    "opsi4": "H",
    "answer": "C"
  },
  {
    "image": "Z.png",
    "question": "Huruf apakah yang ada pada gambar di atas?",
    "opsi1": "Y",
    "opsi2": "Z",
    "opsi3": "X",
    "opsi4": "W",
    "answer": "B"
  }
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
