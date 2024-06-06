require('dotenv').config();

const environments = {
    development: {
      DB_DIALECT: 'sqlite',
      DB_HOST: 'sqlite:database.sqlite',
      DB_LOGGING: false,
    },
    production: {
      DB_DIALECT: process.env.DB_DIALECT || 'postgres',
      DB_HOST: process.env.DB_HOST || 'postgres://xxx:***@postgres.com/postgres',      
    },
    PORTA: process.env.PORT || 3000,
  };
  
  module.exports = environments;
  
