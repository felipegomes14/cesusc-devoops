const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta "views"
app.use(express.static(path.join('views')));

// Rota principal para abrir o index.html
app.get('/', (req, res) => {
  res.sendFile(path.join( 'views/')); 
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


const data = {'integrantes':[

{'nome':'Luiz Felipe Carvalho Gomes'}

]}
app.get('/integrantes', (req, res) => {

res.json(data)

})

function app() {
  return;
}

module.exports = app;