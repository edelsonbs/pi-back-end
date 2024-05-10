const express = require('express');
const router = express.Router();
const controladorSupermercado = require('../controllers/controladorSupermercado');

router.post('/', controladorSupermercado.criarSupermercado);
router.get('/', controladorSupermercado.obterSupermercados);

module.exports = router;
