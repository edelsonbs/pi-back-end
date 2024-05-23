const PrestadorServico = require('../models/modelPrestadorServico');
exports.criarPrestadorServico = async (req, res) => {
  try {
    const novoPrestadorServico = await PrestadorServico.create(req.body);
    res.status(201).json(novoPrestadorServico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obterPrestadorServico = async (req, res) => {
  try {
    const prestadorServico = await PrestadorServico.findByPk(req.params.prestadorServicoID);
    res.json(prestadorServico);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.obterPrestadoresServico = async (req, res) => {
  try {
    const prestadoresServico = await PrestadorServico.findAll();
    res.json(prestadoresServico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.apagarPrestadorServico = async (req, res) => {
  try {
    const { prestadorServicoID } = req.params;

    if (!prestadorServicoID) throw new Error("ID é obrigatorio");
    const prestadorServico = await PrestadorServico.findByPk(prestadorServicoID);

    if (!prestadorServico) throw new Error("Prestador de servico não encontrado");

    prestadorServico.destroy({
      where: {
        id: prestadorServicoID,
      },
    });

    res.status(201).json(prestadorServico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editarPrestadorServico = async (req, res) => {
    try {
      const { prestadorServicoID } = req.params;
      const { nome, cpf, rg, cro, razao_social, cnpj, telefone, endereco } = req.body
      if (!prestadorServicoID) throw new Error("Campos obrigatorios não foram preenchidos");
      const prestadorServico = await PrestadorServico.findByPk(prestadorServicoID);

      if (!prestadorServico) throw new Error("Prestador de servico não encontrado");

      prestadorServico.update({
        nome: nome || prestadorServico.nome,
        cpf: cpf || prestadorServico.cpf,
        rg: rg || prestadorServico.rg,
        cro: cro || prestadorServico.cro,
        razao_social: razao_social || prestadorServico.razao_social,
        cnpj: cnpj || prestadorServico.cnpj,
        telefone: telefone || prestadorServico.telefone,
        endereco: endereco ||prestadorServico.endereco,
      });

      res.status(201).json(prestadorServico);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };