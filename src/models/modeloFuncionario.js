const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');


const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: true
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

module.exports = Funcionario;