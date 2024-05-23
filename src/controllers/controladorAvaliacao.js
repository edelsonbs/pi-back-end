const Avaliacao = require('../models/modeloAvaliacao');

exports.criarAvaliacao = async (req, res) => {
    try {
      const novaAvaliacao = await Avaliacao.create(req.body);
      res.status(201).json(novaAvaliacao);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.obterAvaliacao = async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findAll();
      res.json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.obterAvaliacao = async (req, res) => {
    try {
      const avaliacao = await Avaliacao.findByPk(req.params.avaliacaoID);
      res.json(avaliacao);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.apagarAvaliacao = async (req, res) => {
    try {
      const { avaliacaoID } = req.params;
  
      if (!avaliacaoID) throw new Error("ID é obrigatorio");
      const avaliacao = await Avaliacao.findByPk(avaliacaoID);
  
      if (!avaliacao) throw new Error("Avaliacao não encontrado");
  
      avaliacao.destroy({
        where: {
          id: avaliacaoID,
        },
      });
  
      res.status(201).json(avaliacao);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.editarAvaliacao = async (req, res) => {
      try {
        const { avaliacaoID } = req.params;
        const { paciente, procedimento, nome, telefone, orcamento, cpf, endereco, rg, ficha_anamnese } = req.body
        if (!avaliacaoID) throw new Error("Campos obrigatorios não foram preenchidos");
        const avaliacao = await Avaliacao.findByPk(avaliacaoID);
  
        if (!avaliacao) throw new Error("Consulta não encontrado");
  
        avaliacao.update({
            nome: nome || avaliacao.nome,
            telefone: telefone || avaliacao.telefone,
            orcamento: orcamento || avaliacao.orcamento
        });
  
        res.status(201).json(avaliacao);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };