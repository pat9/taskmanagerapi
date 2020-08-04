require('dotenv').config();

//Connection database
const Sequelize = require('sequelize');

const database = {
  host: process.env.DB_HOST || 'localhost',
  name: process.env.DB_NAME || 'taskmanager',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root',
  dialect: process.env.DB_DIALECT || 'mysql'
}

module.exports = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: database.dialect,
    define: {
      timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
  });
