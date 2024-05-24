const Consulta = require('../models/modeloConsulta');
const Paciente = require('../models/modeloPaciente')

// funcao para criar uma consulta
exports.criarConsulta = async (req, res) => {
    try {
      let { cpfID, procedimento } = req.body
      const paciente = await Paciente.findOne({ where: { cpf: cpfID } });// ira consultar a tabela paciente e verificar se o cpf existe, se existir ira criar a consulta
      if (!paciente) throw new Error("CPF nao existe")
      const novaConsulta = await Consulta.create({procedimento, PacienteId: paciente.id});
      res.status(201).json(novaConsulta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //funcao para obter todas as consultas
  exports.obterConsultas = async (req, res) => {
    try {
      const consultas = await Consulta.findAll( {include: [{ attributes: ['id', 'nome'], model: Paciente }]});
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  //funcao para obter uma consulta
  exports.obterConsulta = async (req, res) => {
    try {
      const consulta = await Consulta.findByPk(req.params.consultaID, {include: [{ attributes: ['id', 'nome'], model: Paciente }]}); 
      res.json(consulta);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  

  // funcao para deletar uma consulta
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
  
  // funcao para editar uma consulta
  exports.editarConsulta = async (req, res) => {
      try {
        const { consultaID } = req.params;
        const { paciente, procedimento } = req.body
        if (!consultaID) throw new Error("Campos obrigatorios não foram preenchidos");
        const consulta = await Consulta.findByPk(consultaID);
  
        if (!consulta) throw new Error("Consulta não encontrado");
      // o operador logico || esta sendo utilizado para quando um item for editado mantenha os outros valores dos outros campos salvos, caso contrario os outro seriam retornados como null
        consulta.update({
            paciente: paciente || consulta.paciente,
            procedimento: procedimento || consulta.procedimento
        });
  
        res.status(201).json(consulta);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };