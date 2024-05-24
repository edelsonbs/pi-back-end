const PrestadorServico = require('../models/modelPrestadorServico');

//funcao para criar Prestador de Servico
exports.criarPrestadorServico = async (req, res) => {
  try {
    const novoPrestadorServico = await PrestadorServico.create(req.body);
    res.status(201).json(novoPrestadorServico);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//funcao para obter um Prestador de Servico
exports.obterPrestadorServico = async (req, res) => {
  try {
    const prestadorServico = await PrestadorServico.findByPk(req.params.prestadorServicoID);
    res.json(prestadorServico);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//funcao para obter todos os Prestadores de Servico
exports.obterPrestadoresServico = async (req, res) => {
  try {
    const prestadoresServico = await PrestadorServico.findAll();
    res.json(prestadoresServico);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//funcao para deletar um Prestador de Servico
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

//funcao para editar um Prestador de Servico
exports.editarPrestadorServico = async (req, res) => {
    try {
      const { prestadorServicoID } = req.params;
      const { nome, cpf, rg, cro, razao_social, cnpj, telefone, endereco } = req.body
      if (!prestadorServicoID) throw new Error("Campos obrigatorios não foram preenchidos");
      const prestadorServico = await PrestadorServico.findByPk(prestadorServicoID);

      if (!prestadorServico) throw new Error("Prestador de servico não encontrado");

      // o operador logico || esta sendo utilizado para quando um item for editado mantenha os outros valores dos outros campos salvos, caso contrario os outro seriam retornados como null
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