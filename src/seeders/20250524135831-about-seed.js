'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('abouts', [
      {
        description: 'Aplikasi ini dibuat untuk membantu anak-anak belajar membaca dan menulis huruf alfabet, angka, dan kata-kata sederhana.',
        team: 'Tim Pengembang Aplikasi Edukasi Anak',
        visi: 'Menciptakan aplikasi edukasi yang menyenangkan dan interaktif untuk anak-anak.',
        misi: 'Memberikan pengalaman belajar yang menarik melalui teknologi digital.'
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
