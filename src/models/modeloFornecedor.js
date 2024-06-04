const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Fornecedor = sequelize.define('Fornecedor', {
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

module.exports = Fornecedor;
