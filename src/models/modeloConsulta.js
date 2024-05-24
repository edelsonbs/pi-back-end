const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

const Consulta = sequelize.define('Consulta', {
    procedimento: {
        type: DataTypes.STRING,
        allowNull: false,
    },

});

module.exports = Consulta;