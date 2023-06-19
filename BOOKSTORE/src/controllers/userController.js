const User = require('../models/User');
const bcrypt = require('bcrypt');

// Rota para criar um novo usuário
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verificar se o usuário já existe no banco de dados
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Já existe um usuário com este email' });
    }

    // Verificar se a senha foi fornecida
if (!password) {
  return res.status(400).json({ error: 'A senha é obrigatória' });
} else {
  // Criptografar a senha antes de salvar o usuário
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const user = new User({ name, email, password: hashedPassword });
  await user.save();

  res.status(201).json(user);
}
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
};


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os usuários' });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o usuário' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o usuário' });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      res.status(404).json({ error: 'Usuário não encontrado' });
    } else {
      res.json({ message: 'Usuário excluído com sucesso' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o usuário' });
  }
};
