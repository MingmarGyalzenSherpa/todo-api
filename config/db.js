const { Pool } = require("pg");
const appConfig = require("./config");

const getConnection = () => {
  const conn = new Pool({
    host: appConfig.HOST,
    user: appConfig.USER,
    password: appConfig.PASSWORD,
    database: appConfig.DB,
    port: appConfig.DB_PORT,
  });
  console.log("DATABASE CONNECTED");
  return conn;
};

module.exports = getConnection;

// const { Pool, Client } = require("pg");

// const getConnection = () => {
//   const conn = new Pool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_DATABASE,
//     port: process.env.DB_PORT,
//   });
//   console.log("database connected!");
//   return conn;
// };

// module.exports = getConnection;
