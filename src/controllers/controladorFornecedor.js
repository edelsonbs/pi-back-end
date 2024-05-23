const Fornecedor = require('../models/modeloFornecedor');
exports.criarFornecedor = async (req, res) => {
  try {
    const novoFornecedor = await Fornecedor.create(req.body);
    res.status(201).json(novoFornecedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obterFornecedor = async (req, res) => {
  try {
    const fornecedor = await Fornecedor.findByPk(req.params.fornecedorID);
    res.json(fornecedor);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.obterFornecedores = async (req, res) => {
  try {
    const fornecedores = await Fornecedor.findAll();
    res.json(fornecedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.apagarFornecedor = async (req, res) => {
  try {
    const { fornecedorID } = req.params;

    if (!fornecedorID) throw new Error("ID é obrigatorio");
    const fornecedor = await Fornecedor.findByPk(fornecedorID);

    if (!fornecedor) throw new Error("Fornecedor não encontrado");

    fornecedor.destroy({
      where: {
        id: fornecedorID,
      },
    });

    res.status(201).json(fornecedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.editarFornecedor = async (req, res) => {
    try {
      const { fornecedorID } = req.params;
      const { razao_social, cnpj, telefone, endereco } = req.body
      if (!fornecedorID) throw new Error("Campos obrigatorios não foram preenchidos");
      const fornecedor = await Fornecedor.findByPk(fornecedorID);

      if (!fornecedor) throw new Error("Fornecedor não encontrado");

      fornecedor.update({
        razao_social: razao_social || fornecedor.razao_social,
        cnpj: cnpj || fornecedor.cnpj,
        telefone: telefone || fornecedor.telefone,
        endereco: endereco || fornecedor.endereco,
      });

      res.status(201).json(fornecedor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };