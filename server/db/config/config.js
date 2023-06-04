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
    password: 'uAh7SLiMphmASgDiojIk',
    database: 'railway',
    port:6786,
    host: 'containers-us-west-177.railway.app',
    dialect: "postgres",
  },
};
