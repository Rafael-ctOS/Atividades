const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(bodyParser.json());

// Simulação de um banco de dados
let cardapio = [];

fs.readFile('menu.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  cardapio = JSON.parse(data);
});

fs.writeFile('menu.json', JSON.stringify(cardapio), 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Arquivo MENU.JSON está pronto para receber comandos.');
});

// Função para gerar um ID sequencial
function generateId() {
  const lastId = cardapio.length > 0 ? cardapio[cardapio.length - 1].id : 0;
  const newId = (parseInt(lastId) + 1).toString().padStart(2, '0');
  return newId;
}

// Rota para adicionar um item ao cardápio
app.post('/cardapio', (req, res) => {
  const { nome, descricao, preco } = req.body;

  // Verifica se todos os campos estão presentes
  if (!nome || !descricao || !preco) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const novoItem = { id: generateId(), nome, descricao, preco };
  cardapio.push(novoItem);

  fs.writeFile('menu.json', JSON.stringify(cardapio), 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao gravar o cardápio.' });
    }
    return res.json(novoItem);
  });
});

// Rota para retornar o cardápio completo
app.get('/cardapio', (req, res) => {
  return res.json(cardapio);
});

// Rota para retornar um item específico pelo ID
app.get('/cardapio/:id', (req, res) => {
  const item = cardapio.find(item => item.id === req.params.id);

  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  return res.json(item);
});

// Rota para alterar um item do cardápio pelo ID
app.put('/cardapio/:id', (req, res) => {
  const { nome, descricao, preco } = req.body;
  const item = cardapio.find(item => item.id === req.params.id);

  if (!item) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  item.nome = nome || item.nome;
  item.descricao = descricao || item.descricao;
  item.preco = preco || item.preco;

  fs.writeFile('menu.json', JSON.stringify(cardapio), 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao gravar o cardápio.' });
    }
    return res.json(item);
  });
});

// Rota para excluir um item do cardápio pelo ID
app.delete('/cardapio/:id', (req, res) => {
  const index = cardapio.findIndex(item => item.id === req.params.id, console.log ('item deletado do menu'));
  

  if (index === -1) {
    return res.status(404).json({ error: 'Item não encontrado.' });
  }

  const deletedItem = cardapio.splice(index, 1);

  fs.writeFile('menu.json', JSON.stringify(cardapio), 'utf-8', (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Erro ao gravar o cardápio.' });
    }
    return res.json(deletedItem[0]);
  });
});

// Inicia o servidor
app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000.');
});

module.exports = router;
