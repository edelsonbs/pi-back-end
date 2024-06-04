const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Consulta = require('../models/modeloConsulta');

const Paciente = sequelize.define('Paciente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ficha_anamnese: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Paciente.hasMany(Consulta) // Paciente tem muitas consultas
Consulta.belongsTo(Paciente) // Muitas consultas pertence a um paciente

module.exports = Paciente;