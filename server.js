// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/clientes', (req, res) => {
  // Aqui você pode salvar os dados do cliente recebidos do formulário
  console.log(req.body);
  res.json({ message: 'Cliente cadastrado com sucesso!' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
