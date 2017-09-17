'use strict'

/* Importa estrutura MVC/Rotas */
const express = require('express');
/* Importa o parser do body da requisição */
const bodyParser = require('body-parser');
/* Importar mongoose conectar banco nosql */
const mongoose = require('mongoose');
/* Importar o arquivo de configuração */
const config = require('./config');

/* Conecta com o banco de dados */
mongoose.connect(config.connectionString);

/* Carrega os models */
const Product = require('./models/product');
const Customer = require('./models/customer');
const Order = require('./models/order');

/* Cria a aplicação em MVC */
const app = express();
/* Cria as rotas do MVC */
const router = express.Router();

/* Carrega as rotas */
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

/* Converte o conteúdo par JSON e codificar a url */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* Criação das rotas */
app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/orders', orderRoute);


module.exports = app;