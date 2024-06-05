const { Sequelize } = require('sequelize');
const environments = require('./environments');

const env = process.env.NODE_ENV || 'development';
const configEnv = environments[env];

const sequelize = new Sequelize({
  dialect: configEnv.DB_DIALECT,
  storage: configEnv.DB_STORAGE,
  logging: configEnv.DB_LOGGING,
  host: configEnv.DB_HOST,
  port: configEnv.DB_PORT,
  username: configEnv.DB_USERNAME,
  password: configEnv.DB_PASSWORD,
  database: configEnv.DB_NAME
});

// A função SYNC só é recomendada para projetos na fase de testes, como por exemplo o uso do sqlit3
// Ao utilizar um banco de produção, crie suas tabelas manualmente e comente esse trecho de código
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado com sucesso');
  })
  .catch(err => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });

module.exports = sequelize;
