const express = require('express');
const router = express.Router();
const controladorFornecedor = require('../controllers/controladorFornecedor')
const controladorPrestadorServico = require('../controllers/controladorPrestadorServico')
const controladorPaciente = require('../controllers/controladorPaciente')
const controladorFuncionario = require('../controllers/controladorFuncionario')
const controladorConsulta = require('../controllers/controladorConsulta');

// CRUD Paciente
router.post('/paciente', controladorPaciente.criarPaciente);
router.get('/paciente', controladorPaciente.obterPacientes);
router.get('/paciente/:pacienteID', controladorPaciente.obterPaciente);
router.put('/paciente/:pacienteID', controladorPaciente.editarPaciente);
router.delete('/paciente/:pacienteID', controladorPaciente.apagarPaciente);

// CRUD Fornecedor
router.get('/fornecedor/:fornecedorID',controladorFornecedor.obterFornecedor)
router.get('/fornecedor',controladorFornecedor.obterFornecedores)
router.post('/fornecedor',controladorFornecedor.criarFornecedor)
router.put('/fornecedor/:fornecedorID', controladorFornecedor.editarFornecedor)
router.delete('/fornecedor/:fornecedorID', controladorFornecedor.apagarFornecedor)

// CRUD Prestador de Servico
router.get('/prestadorServico/:prestadorServicoID', controladorPrestadorServico.obterPrestadorServico)
router.get('/prestadorServico', controladorPrestadorServico.obterPrestadoresServico)
router.post('/prestadorServico', controladorPrestadorServico.criarPrestadorServico)
router.put('/prestadorServico/:prestadorServicoID', controladorPrestadorServico.editarPrestadorServico)
router.delete('/prestadorServico/:prestadorServicoID', controladorPrestadorServico.apagarPrestadorServico)

// CRUD Funcionario 
router.post('/funcionario', controladorFuncionario.criarFuncionario);
router.get('/funcionario', controladorFuncionario.obterFuncionarios);
router.get('/funcionario/:funcionarioID', controladorFuncionario.obterFuncionario);
router.put('/funcionario/:funcionarioID', controladorFuncionario.editarFuncionario);
router.delete('/funcionario/:funcionarioID', controladorFuncionario.apagarFuncionario);

// CRUD Consulta
router.post('/consulta', controladorConsulta.criarConsulta);
router.get('/consulta', controladorConsulta.obterConsultas);
router.get('/consulta/:consultaID', controladorConsulta.obterConsulta);
router.put('/consulta/:consultaID', controladorConsulta.editarConsulta);
router.delete('/consulta/:consultaID', controladorConsulta.apagarConsulta);



module.exports = router;
