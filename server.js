const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // envia o arquivo da página principal
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/sobre', (req, res) => {
    res.send("Um simples tutorial de NodeJS. <a href='/'>Voltar</a>")
})

app.listen(3000, () => {
  console.log('Server online')
})