const Consulta = require('../models/modeloConsulta');
const Paciente = require('../models/modeloPaciente')

exports.criarConsulta = async (req, res) => {
    try {
      let { cpfID, procedimento } = req.body
      const ass = await Paciente.findOne({ where: { cpf: cpfID } });
      if (!ass) throw new Error("CPF nao existe")
      const novaConsulta = await Consulta.create({procedimento, PacienteId: ass.id});
      res.status(201).json(novaConsulta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.obterConsultas = async (req, res) => {
    try {
      const consultas = await Consulta.findAll();
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.obterConsulta = async (req, res) => {
    try {
      const consulta = await Consulta.findByPk(req.params.consultaID); // req.params.pacienteID
      res.json(consulta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.apagarConsulta = async (req, res) => {
    try {
      const { consultaID } = req.params;
  
      if (!consultaID) throw new Error("ID é obrigatorio");
      const consulta = await Consulta.findByPk(consultaID);
  
      if (!consulta) throw new Error("Consulta não encontrado");
  
      consulta.destroy({
        where: {
          id: consultaID,
        },
      });
  
      res.status(201).json(consulta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.editarConsulta = async (req, res) => {
      try {
        const { consultaID } = req.params;
        const { paciente, procedimento } = req.body
        if (!consultaID) throw new Error("Campos obrigatorios não foram preenchidos");
        const consulta = await Consulta.findByPk(consultaID);
  
        if (!consulta) throw new Error("Consulta não encontrado");
  
        consulta.update({
            paciente: paciente || consulta.paciente,
            procedimento: procedimento || consulta.procedimento
        });
  
        res.status(201).json(consulta);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };