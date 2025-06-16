let fs = require('fs')
let path = require('path')


const pt = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
)

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(pt,(err,filecontent)=>{
            let cart = { products: [], totalPrice:0}
            if(!err){
                try {
                    cart = JSON.parse(filecontent)
                } catch (e) {
                    cart = cart
                }
            }
            const existingProductIndex = cart.products.findIndex(p=> p.id === id)

            const existingProduct = cart.products[existingProductIndex]
            let updatedProducts;

            if(existingProduct){
                updatedProducts = {...existingProduct}
                updatedProducts.qty = updatedProducts.qty + 1;
                cart.products = [...cart.products]
                cart.products[existingProductIndex] = updatedProducts;
            }
            else{
                updatedProducts = {id:id , qty:1}
                cart.products = [...cart.products,updatedProducts]
            }

            cart.totalPrice = cart.totalPrice+ +productPrice;
            
            
            fs.writeFile(pt,JSON.stringify(cart),(err)=>{
                console.log(err)
            })
        })
   }

   static deleteProduct(id,productPrice){
    fs.readFile(pt,(err,filecontent)=>{
        if(err){
            return;
        }
        const updatedcart = {...JSON.parse(filecontent)}
        const product = updatedcart.products.find(prod => prod.id === id)
        const productQty = product.qty
        updatedcart.products = updatedcart.products.filter(prod => prod.id !== id)
        updatedcart.totalPrice = updatedcart.totalPrice - productPrice * productQty
        fs.writeFile(pt,JSON.stringify(updatedcart),err =>{
            console.log(err);            
        })
    })
   }

   static getCart(cb) {
    fs.readFile(pt, (err, filecontent) => {
        if (err) {
            return cb({ products: [], totalPrice: 0 });
        }
        try {
            cb(JSON.parse(filecontent));
        } catch (e) {
            cb({ products: [], totalPrice: 0 });
        }
    });
    }
   static getOrder(cb) {
    fs.readFile(pt, (err, filecontent) => {
        if (err) {
            return cb({ products: [], totalPrice: 0 });
        }
        try {
            cb(JSON.parse(filecontent));
        } catch (e) {
            cb({ products: [], totalPrice: 0 });
        }
    });
    }


   
}