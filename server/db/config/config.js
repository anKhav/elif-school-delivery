
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
    url:process.env.DATABASE_URL,
    dialect: "postgres",
  },
};
