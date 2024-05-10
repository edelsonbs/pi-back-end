const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');

router.post('/', controladorProduto.criarProduto);
router.get('/', controladorProduto.obterProdutos);

module.exports = router;
