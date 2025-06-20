const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },   
  delivery: { type: String, required: true },
  imageUrl: { type: String, required: true }
});



module.exports = mongoose.model('Product' , productSchema)