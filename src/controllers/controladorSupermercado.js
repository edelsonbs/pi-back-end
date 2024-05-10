const Supermercado = require('../models/modeloSupermercado');

const criarSupermercado = async (req, res) => {
  try {
    const novoSupermercado = await Supermercado.create(req.body);
    res.status(201).json(novoSupermercado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const obterSupermercados = async (req, res) => {
  try {
    const supermercados = await Supermercado.findAll();
    res.json(supermercados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { obterSupermercados , criarSupermercado}