'use strict';

/* Importar o módulo express - MVC */
const express = require('express');
/* Armazena as rotas */
const router = express.Router();
const controller = require('../controllers/product-controller');


/* Configura uma rota de GET */
router.get('/', controller.get);
/* Configura uma rota de GET SLUG */
router.get('/:slug', controller.getBySlug);
/* Configura uma rota de GET ID */
router.get('/admin/:id', controller.getById);
/* Configura uma rota de GET TAG */
router.get('/tags/:tag', controller.getByTag);
/* Configura uma rota de POST */
router.post('/', controller.post);
/* Configura uma rota de PUT */
router.put('/:id', controller.put);
/* Configura uma rota de DELETE */
router.delete('/:id', controller.delete);


module.exports = router;