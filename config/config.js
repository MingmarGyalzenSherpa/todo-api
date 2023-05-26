const dotenv = require("dotenv");
dotenv.config();

const appConfig = {
  PORT: process.env.APP_PORT,
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB,
  DB_PORT: process.env.DB_PORT,
};

module.exports = appConfig;
