 let express = require('express');
 let router = express.Router();
 let path = require('path')
 let global = require('../util/pathdef')

// let adminExport = require('./Admin')

let ProductController = require('../controller/ProductController')


router.get("/" , ProductController.home_Products );
router.get("/cart", ProductController.cart_products);
router.get("/order", ProductController.order_products);
router.get("/product", ProductController.product);
router.get("/product/description/:productId", ProductController.product_description);
router.post('/cart/:productId', ProductController.shop_cart_post);
    
    module.exports = router
    // router.use("/",(req,resp,next)=>{ 
    //         resp.send('<h1>Welcome to home page</h1>')
           
    //     })