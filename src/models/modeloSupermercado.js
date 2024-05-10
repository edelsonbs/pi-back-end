const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Supermercado = sequelize.define('Supermercado', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  localizacao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Supermercado;
