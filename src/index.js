// src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const corsMiddleware = require('./middlewares/corsMiddleware');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(corsMiddleware); // Usa o middleware CORS configurado no arquivo separado
app.use(bodyParser.json());

// Routes
app.use('/api', authRoutes);  // Prefixo para as rotas de autenticação

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
