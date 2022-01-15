const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DBMS,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
    }  
)

module.exports = sequelize;
global.sequelize = sequelize;