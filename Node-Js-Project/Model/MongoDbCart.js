const mongoose = require('mongoose')

const cartProductSchema = new mongoose.Schema({
    id : String,
    qty : Number
})

const cartSchema = new mongoose.Schema({
    products:[cartProductSchema],
    totalPrice : Number
})

module.exports = mongoose.model('Cart' , cartSchema)