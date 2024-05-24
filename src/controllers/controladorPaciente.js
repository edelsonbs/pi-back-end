const Paciente = require("../models/modeloPaciente");

// funcao para criar um paciente
exports.criarPaciente = async (req, res) => {
  try {
    const novoPaciente = await Paciente.create(req.body);
    res.status(201).json(novoPaciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// funcao para obter todos os pacientes
exports.obterPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll({include: [{ attributes: ['procedimento'], model: Consulta }]});
    res.json(pacientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// funcao para obter um paciente
exports.obterPaciente = async (req, res) => {
  try {
    const paciente = await Paciente.findByPk(req.params.pacienteID); // req.params.pacienteID
    res.json(paciente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// funcao para deletar um paciente
exports.apagarPaciente = async (req, res) => {
  try {
    const { pacienteID } = req.params;

    if (!pacienteID) throw new Error("ID é obrigatorio");
    const paciente = await Paciente.findByPk(pacienteID);

    if (!paciente) throw new Error("Paciente não encontrado");

    paciente.destroy({
      where: {
        id: pacienteID,
      },
    });

    res.status(201).json(paciente);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// funcao para editar um paciente
exports.editarPaciente = async (req, res) => {
    try {
      const { pacienteID } = req.params;
      const { nome, telefone, cpf, endereco, rg, ficha_anamnese } = req.body
      if (!pacienteID) throw new Error("Campos obrigatorios não foram preenchidos");
      const paciente = await Paciente.findByPk(pacienteID);

      if (!paciente) throw new Error("Paciente não encontrado");
      // o operador logico || esta sendo utilizado para quando um item for editado mantenha os outros valores dos outros campos salvos, caso contrario os outro seriam retornados como null
      paciente.update({
        nome: nome || paciente.nome,
        telefone: telefone || paciente.telefone,
        cpf: cpf || paciente.cpf,
        endereco: endereco || paciente.endereco,
        rg: rg || paciente.rg,
        ficha_anamnese: ficha_anamnese || paciente.ficha_anamnese,
      });

      res.status(201).json(paciente);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

