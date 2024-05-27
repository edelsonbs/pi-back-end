const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const PrestadorServico = sequelize.define('PrestadorServico', {
nome: {
    type: DataTypes.STRING,
    allowNull: true,
},
cpf: {
    type: DataTypes.STRING,
    allowNull: true,
},
rg: {
    type: DataTypes.STRING,
    allowNull: true,
},
cro: {
    type: DataTypes.STRING,
    allowNull: true,
},
  razao_social: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = PrestadorServico;