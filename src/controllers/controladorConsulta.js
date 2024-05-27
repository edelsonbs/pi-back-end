const Consulta = require('../models/modeloConsulta');
const Paciente = require('../models/modeloPaciente');
const PrestadorServico = require('../models/modelPrestadorServico');

// funcao para criar uma consulta
exports.criarConsulta = async (req, res) => {
    try {
      let { cpfID, croID, nome, data, hora, procedimento } = req.body
      const paciente = await Paciente.findOne({ where: { cpf: cpfID } });// ira consultar a tabela paciente e verificar se o cpf existe, se existir ira criar a consulta
      if (!paciente) throw new Error("CPF nao existe")

      const prestadorServico = await PrestadorServico.findOne({ where: {cro: croID}});
      if (!prestadorServico) throw new Error("Prestador de servico não encontrado")

      const novaConsulta = await Consulta.create({nome, data,hora, procedimento, PacienteId: paciente.id, PrestadorServicoId: prestadorServico.id});
      res.status(201).json(novaConsulta);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  //funcao para obter todas as consultas
  exports.obterConsultas = async (req, res) => {
    try {
      const consultas = await Consulta.findAll( { include:
        [{ model: Paciente, attributes: ['id', 'nome']},
     { model: PrestadorServico, attributes:['nome', 'cro']}]});
      res.json(consultas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  //funcao para obter uma consulta
  exports.obterConsulta = async (req, res) => {
    try {
      const consulta = await Consulta.findByPk(req.params.consultaID, { include: [{ model: Paciente, attributes: ['id', 'nome']}, { model: PrestadorServico, attributes: ['id', 'nome', 'cro'], }]}); 
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
        const { procedimento, data, hora, croID, cpfID } = req.body
        if (!consultaID) throw new Error("Campos obrigatorios não foram preenchidos");
        const consulta = await Consulta.findByPk(consultaID);
  
        if (!consulta) throw new Error("Consulta não encontrado");
      // o operador logico || esta sendo utilizado para quando um item for editado mantenha os outros valores dos outros campos salvos, caso contrario os outro seriam retornados como null
        consulta.update({
          procedimento: procedimento || consulta.procedimento,
          data: data || consulta.data,
          hora: hora || consulta.hora,
          croID: croID || consulta.croID,
          cpfID: cpfID || consulta.cpfID
        });
  
        res.status(201).json(consulta);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };