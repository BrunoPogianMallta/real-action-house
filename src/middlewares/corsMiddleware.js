// src/middlewares/corsMiddleware.js
const cors = require('cors');

module.exports = cors({
  origin: ['http://127.0.0.1:5500', 'http://localhost:3000']
});
