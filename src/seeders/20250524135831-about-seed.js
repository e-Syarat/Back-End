'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   return queryInterface.bulkInsert('about', [
      {
        description: 'e-Syarat adalah platform yang didedikasikan untuk membuat pembelajaran bahasa isyarat menjadi mudah diakses, modern, dan menarik untuk semua orang. Pelajari misi, visi, dan orang-orang di balik gerakan ini.',
        visi: 'Membangun dunia inklusif di mana komunikasi tidak memiliki batas.',
        misi: 'Membuat pembelajaran bahasa isyarat mudah dan interaktif untuk semua orang melalui teknologi.',
        team: JSON.stringify([
          {
            name: "Muhammad Akmal Maulana",
            role: "Machine Learning Engineer",
            photo: "akmal.jpg",
            desc: "Ketua tim dari capstone project dan Machine Learning Engineer dari universitas siliwangi"
          },
          {
            name: "Muhammad Fahmi Aulia Noor",
            role: "Backend Developer",
            photo: "fahmi.jpg",
            desc: "Project manager di capstone project dan backend developer dari kampus Sekolah Tinggi Teknologi Cipasung"
          },
          {
            name: "Hilda Oktaviani",
            role: "Machine Learning Engineer",
            photo: "hilda.jpg",
            desc: "Merancang dan membangun model machine learning yang akurat untuk mengidentifikasi bahasa isyarat."
          },
          {
            name: "Daffa Haidar Farras",
            role: "Machine Learning Engineer",
            photo: "daffa.jpg",
            desc: "Merancang dan membangun model machine learning yang akurat untuk mengidentifikasi bahasa isyarat."
          },
          {
            name: "Zeni Ramadan",
            role: "Frontend Developer",
            photo: "zeni.jpg",
            desc: "Merancang dan membangun antarmuka pengguna yang menarik dan intuitif."
          },
          {
            name: "Ayi Muhamad Nasrulloh",
            role: "Fronntend Developer",
            photo: "ayi.jpg",
            desc: "Merancang dan membangun antarmuka pengguna yang menarik dan intuitif."
          }
        ])
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
