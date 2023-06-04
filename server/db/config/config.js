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
    username: 'postgres',
    password: '4D2b4tPkmknZZHeZz0X7',
    database: 'railway',
    port:5499,
    host: 'containers-us-west-193.railway.app',
    dialect: "postgres",
  },
};
