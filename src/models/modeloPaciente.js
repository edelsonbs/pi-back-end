const { DataTypes } = require("sequelize");
const sequelize = require("../config/dbConfig");

const Paciente = sequelize.define("Paciente", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereço: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ficha_anamnese: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Paciente;
