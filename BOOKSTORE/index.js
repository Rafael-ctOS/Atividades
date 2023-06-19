const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./src/routes/userRoutes');
const bookRoutes = require('./src/routes/bookRoutes');

const app = express();

// Conectar ao banco de dados
connectDB();

// Middleware para receber requisições no formato JSON
app.use(express.json());

// Rotas para usuários
app.use('/api/users', userRoutes);

// Rotas para livros
app.use('/api/books', bookRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});