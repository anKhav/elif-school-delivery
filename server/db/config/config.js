require("dotenv").config();
 const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    username: process.env.USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: "postgres",
    port:process.env.DB_PORT,
    host: process.env.DB_HOST,
})
console.log(sequelize)
module.exports = sequelize
