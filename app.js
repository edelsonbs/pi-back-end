const express = require("express");
const app = express();
const environments = require("./src/config/environments");
const rotas = require("./src/routes/rotas");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

// Rotas da API
app.use("/api", rotas);

const PORTA = environments.PORTA;

(async () => {
  try {
    app.get("/", (req, res) => {
      res.send(`Aqui deu certo`);
    });

    app.listen(PORTA, () => {
      console.log(`Servidor rodando em http://localhost:${PORTA}`);
    });
  } catch (error) {
    console.error("Erro ao sincronizar o banco de dados:", error);
  }
})();
