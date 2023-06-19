const express = require('express');
const Book = require('../models/Book');

const router = express.Router();

// Rota para criar um novo livro
router.post('/', async (req, res) => {
  try {
    const { name, author } = req.body;
    const book = new Book({ name, author });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o livro' });
  }
});

// Rota para buscar todos os livros
router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
});

// Rota para buscar um livro pelo ID
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
});

// Rota para atualizar um livro pelo ID
router.put('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json(book);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
});

// Rota para excluir um livro pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json({ message: 'Livro excluído com sucesso' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao excluir o livro' });
  }
});

module.exports = router;