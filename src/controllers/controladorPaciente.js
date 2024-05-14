const Paciente = require("../models/modeloPaciente");

exports.criarPaciente = async (req, res) => {
  try {
    const novoPaciente = await Paciente.create(req.body);
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obterPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll();
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.obterPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.pacienteID); // req.params.pacienteID
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
