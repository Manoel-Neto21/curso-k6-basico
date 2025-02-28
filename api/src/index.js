const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Servidor Node.js em execução!');
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});