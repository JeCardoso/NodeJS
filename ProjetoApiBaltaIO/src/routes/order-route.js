'use strict';

/* Importar o módulo express - MVC */
const express = require('express');
/* Armazena as rotas */
const router = express.Router();
const controller = require('../controllers/order-controller');

/* Configura uma rota de POST */
router.get('/', controller.get);
router.post('/', controller.post);


module.exports = router;