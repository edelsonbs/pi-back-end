const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Consulta = require('../models/modeloConsulta');

const Paciente = sequelize.define('Paciente', {
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
    ficha_anamnese: {
        type: DataTypes.STRING,
        allowNull: true
    },
});

Paciente.hasMany(Consulta) // Paciente tem muitas consultas
Consulta.belongsTo(Paciente) // Muitas consultas pertence a um paciente

module.exports = Paciente;