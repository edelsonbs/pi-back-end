const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Avaliacao = sequelize.define('Avaliacao', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    orcamento: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = Avaliacao;