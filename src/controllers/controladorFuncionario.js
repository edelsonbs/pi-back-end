const Funcionario = require('../models/modeloFuncionario');

exports.criarFuncionario = async (req, res) => {
  try {
    const novoFuncionario = await Funcionario.create(req.body);
    res.status(201).json(novoFuncionario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.obterFuncionarios = async (req, res) => {
  try {
    const funcionario = await Funcionario.findAll();
    res.json(funcionario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};


exports.obterFuncionario = async (req, res) => {
    try {
      const funcionario = await Funcionario.findByPk(req.params.funcionarioID); // req.params.pacienteID
      res.json(funcionario);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
    
  };

  exports.apagarFuncionario = async (req, res) => {
    try {
      const { funcionarioID } = req.params;
  
      if (!funcionarioID) throw new Error("ID é obrigatorio");
      const funcionario = await Funcionario.findByPk(funcionarioID);
  
      if (!funcionario) throw new Error("Funcionario não encontrado");
  
      funcionario.destroy({
        where: {
          id: funcionarioID,
        },
      });
  
      res.status(201).json(funcionario);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.editarFuncionario = async (req, res) => {
      try {
        const { funcionarioID } = req.params;
        const { nome, telefone, cpf, endereco, rg } = req.body
        if (!funcionarioID) throw new Error("Campos obrigatorios não foram preenchidos");
        const funcionario = await Funcionario.findByPk(funcionarioID);
  
        if (!funcionario) throw new Error("Funcionario não encontrado");
  
        funcionario.update({
          nome: nome || funcionario.nome,
          telefone: telefone || funcionario.telefone,
          cpf: cpf || funcionario.cpf,
          endereco: endereco || funcionario.endereco,
          rg: rg || funcionario.rg
        });
  
        res.status(201).json(funcionario);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    };