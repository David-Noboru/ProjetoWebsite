const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Olá mundo. <a href="/sobre">Ir para Sobre</a>');
});

app.get('/sobre', (req, res) => {
  res.send('Um simples tutorial de NodeJS <a  href=/>Voltar</a>');
});

app.listen(3000, () => {
  console.log('Server online');
});
