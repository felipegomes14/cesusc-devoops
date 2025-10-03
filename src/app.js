const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta "views"
app.use(express.static(path.join(__dirname, 'views')));

// Rota principal para abrir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/')); 
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


data = {'integrantes':[

{'nome':'Luiz Felipe Carvalho Gomes'}

]}
app.get('/integrantes', (req, res) => {

res.json(data)

})