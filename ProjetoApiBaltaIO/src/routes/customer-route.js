'use strict';

/* Importar o módulo express - MVC */
const express = require('express');
/* Armazena as rotas */
const router = express.Router();
const controller = require('../controllers/customer-controller');

/* Configura uma rota de POST */
router.post('/', controller.post);


module.exports = router;