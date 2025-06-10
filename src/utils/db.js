const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');
dotenv.config();
const connectionString = process.env.MYSQL_PUBLIC_URL;

const sequelize = new Sequelize(connectionString, {
  dialect: 'mysql',
  logging: process.env.NODE_ENV !== 'production',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = sequelize;
