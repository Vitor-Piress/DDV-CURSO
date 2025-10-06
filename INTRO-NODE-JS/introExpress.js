// Framework para criar servidores HTTP em Node.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  return res.send("Olá Mundo!");
});

app.get("/teste", (req, res) => {
  return res.send("Teste");
});

app.listen(4000, () => {
  console.log("Servidor rodando na porta 4000");
});
