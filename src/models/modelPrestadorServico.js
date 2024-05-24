const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const PrestadorServico = sequelize.define('PrestadorServico', {
nome: {
    type: DataTypes.STRING,
    allowNull: false,
},
cpf: {
    type: DataTypes.STRING,
    allowNull: false,
},
rg: {
    type: DataTypes.STRING,
    allowNull: false,
},
cro: {
    type: DataTypes.STRING,
    allowNull: false,
},
  razao_social: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = PrestadorServico;