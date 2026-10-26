
const express = require('express');

const usuarioRoutes = require('./src/routes/usuarioRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');

const app = express();

app.use(express.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/clientes', clienteRoutes);

module.exports = app;
