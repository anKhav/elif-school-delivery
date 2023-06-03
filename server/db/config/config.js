require("dotenv").config();
module.exports = {
  development: {
    username: 'postgres',
    password: 'postgres',
    database: "elif_delivery",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: "root",
    password: null,
    database: "clothes_store_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: "postgres",
  },
};
