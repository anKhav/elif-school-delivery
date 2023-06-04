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
    password: '4JoXDVGJQNzi7Sufqnbq',
    database: 'railway',
    port:7722,
    host: 'containers-us-west-95.railway.app',
    dialect: "postgres",
  },
};
