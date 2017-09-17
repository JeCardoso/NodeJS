'use strict';

/* Importar o fluent validator */
const ValidationContract = require('../validators/fluent-validator');
/* Importa o repositório */
const repository = require('../repositories/customer-repository');
/* Encriptação de senha */
const md5 = require("md5");

const emailService = require('../services/email-service');

exports.post = async(req, res, next) => {
        /* Validações caso não for trabalhar com mongoose */
        let contract = new ValidationContract();
        contract.hasMinLen(req.body.name, 3, 'O nome deve conter pelo menos 3 caracteres');
        contract.isEmail(req.body.email, 'O email deve conter pelo menos 3 caracteres');
        contract.hasMinLen(req.body.password, 3, 'A senha deve conter pelo menos 3 caracteres');
    
        if(!contract.isValid()){
            res.status(400).send(contract.errors()).end();
            return;
        }
    
        try {
            await repository.create({
                name:req.body.name,
                email:req.body.email,
                password:md5(req.body.password + global.SALT_KEY)
            });

            emailService.send(
                req.body.email,
                'Bem vindo ao Node Store',
                global.EMAIL_TMPL.replace('{0}', req.body.name)
            );

            res.status(201).send({
            message : 'Cliente cadastrado com sucesso!!!'
        });
        } catch (e) {
                res.status(500).send({
                message:'Falha ao cadastrar sua requisição'
            });
        }
}