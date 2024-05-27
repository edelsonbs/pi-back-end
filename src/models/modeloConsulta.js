const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const PrestadorServico = require('../models/modelPrestadorServico');

const Consulta = sequelize.define('Consulta', {
    data: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    hora: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    procedimento: {
        type: DataTypes.STRING,
        allowNull: true,
    },

});

PrestadorServico.hasMany(Consulta)// um prestador ser. tem muitas consultas
Consulta.belongsTo(PrestadorServico)// muitas consultas pertence a um prestador de servico

module.exports = Consulta;