'use strict';

/* Importa o mongoose */
const mongoose = require('mongoose');
/* Importa o model product */
const Order = mongoose.model('Order');

exports.get = async(data) => {
    var res = await Order
        .find({}, 'number status customer items')
        .populate('customer', 'name')
        .populate('items.product', 'title');
    return res;
}

exports.create = async(data) => {
    var order = new Order(data);
    await order.save();
}