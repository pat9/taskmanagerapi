require('dotenv').config();

var env = process.env.NODE_ENV || 'development';

var db = {
  database: process.env.DB_NAME || 'devproyect',
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || 'localhost',
  dialect: process.env.DB_DIALECT || 'mysql',
  storage: process.env.DB_DIALECT === 'sqlite' ? './db.sqlite' : null,
  dialectOptions: {
    useUTC: false
  },
  timezone: 'America/Merida',
};

module.exports = {
  [env]: db,
};
