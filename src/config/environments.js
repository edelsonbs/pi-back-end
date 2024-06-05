const environments = {
    development: {
      DB_DIALECT: 'sqlite',
      DB_STORAGE: 'database.sqlite',
      DB_LOGGING: false,
    },
    production: {
      DB_DIALECT: process.env.DB_DIALECT || 'mysql',
      DB_HOST: process.env.DB_HOST || 'seu-host',
      DB_USERNAME: process.env.DB_USERNAME || 'seu-usuario',
      DB_PASSWORD: process.env.DB_PASSWORD || 'sua-senha',
      DB_NAME: process.env.DB_NAME || 'seu-banco-de-dados',
      DB_PORT: process.env.DB_PORT || 5432
      // outras opções de configuração, se necessário
      //
    },
    PORTA: process.env.PORT || 3000,
  };
  
  module.exports = environments;
  