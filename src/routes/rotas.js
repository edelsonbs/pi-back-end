const express = require("express");
const router = express.Router();
const controladorPaciente = require("../controllers/controladorPaciente");

router.post("/paciente", controladorPaciente.criarPaciente);
router.get("/paciente", controladorPaciente.obterPacientes);
router.get("/paciente/:pacienteID", controladorPaciente.obterPaciente);

module.exports = router;
