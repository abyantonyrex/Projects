let express = require("express");
let router = express.Router();
let Path = require("path");
let global = require("../util/pathdef");

let adminMongoController = require('../controller/adminMongoController'); // <-- update to your new file

router.post("/message", adminMongoController.addProductPost);
router.get("/admin-product", adminMongoController.admin_Products);
router.get("/add-product", adminMongoController.addProduct_get);
router.get("/edit-product/:productId", adminMongoController.editProduct_get);
router.post("/edit-product", adminMongoController.editProduct_post);
router.post("/delete-product", adminMongoController.deleteProduct);
// router.post("/cart/delete", adminMongoController.cartDeleteProduct);

router.post('/cart/decrement', adminMongoController.cartDecrementProduct);
router.post('/cart/increment', adminMongoController.cartIncrementProduct);
router.post('/cart/deleteAll', adminMongoController.cartDeleteAllProduct);

router.post('/cart/:productId', adminMongoController.shop_cart_post);  // should always be last or  increment only works for all

module.exports = router;
