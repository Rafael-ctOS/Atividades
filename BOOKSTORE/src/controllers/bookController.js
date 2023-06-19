const Book = require('../models/Book');

exports.createBook = async (req, res) => {
  try {
    const { name, author } = req.body;
    const book = new Book({ name, author });
    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o livro' });
  }
};

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os livros' });
  }
};

exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o livro' });
  }
};

exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json(book);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o livro' });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) {
      res.status(404).json({ error: 'Livro não encontrado' });
    } else {
      res.json({ message: 'Livro excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o livro' });
  }
};
