let express = require('express');
let router = express.Router();

let productMongoController = require('../controller/productMongoController');

// MongoDB-powered routes:
router.get("/", productMongoController.home_Products_Mongo);
router.get("/cart", productMongoController.cart_products);
router.get("/order", productMongoController.order_products);
router.get("/product", productMongoController.product_Mongo);
router.get("/product/description/:productId", productMongoController.product_description_Mongo);


module.exports = router;
