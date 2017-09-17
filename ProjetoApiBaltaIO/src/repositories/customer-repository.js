'use strict';

/* Importa o mongoose */
const mongoose = require('mongoose');
/* Importa o model product */
const Customer = mongoose.model('Customer');

exports.create = async(data) => {
    var customer = new Customer(data);
    await customer.save();
}