const express = require('express');
const app = express();

// Middleware para fazer o parse do corpo da requisição como JSON
app.use(express.json());

// Resto das configurações do seu aplicativo

module.exports = app;