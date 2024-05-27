const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Fornecedor = sequelize.define('Fornecedor', {
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

module.exports = Fornecedor;
