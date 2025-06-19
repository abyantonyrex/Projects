const fs = require('fs');
const path = require('path');

const pt = path.join(
    path.dirname(require.main.filename),
    'data',
    'cart.json'
);

module.exports = class Cart {
    static addProduct(id, productPrice) {
        fs.readFile(pt, (err, filecontent) => {
            let cart = { products: [], totalPrice: 0 };
            if (!err) {
                try {
                    cart = JSON.parse(filecontent);
                } catch (e) {
                    cart = cart;
                }
            }

            // Always treat ID as string
            const productId = id.toString();
            const existingProductIndex = cart.products.findIndex(p => p.id === productId);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;

            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: productId, qty: 1 };
                cart.products = [...cart.products, updatedProduct];
            }

            cart.totalPrice = cart.totalPrice + +productPrice;

            fs.writeFile(pt, JSON.stringify(cart), (err) => {
                if (err) console.log(err);
            });
        });
    }

    static deleteProduct(id,qty, productPrice) {
        fs.readFile(pt, (err, filecontent) => {
            if (err) {
                return;
            }

            const updatedcart = { ...JSON.parse(filecontent) };
            const productId = id.toString();
            const product = updatedcart.products.find(prod => prod.id === productId);

            if (!product) {
                console.warn(`Product with ID ${id} not found in cart.`);
                return;
            }

            const productQty = product.qty || 1; // fallback to 1 if qty missing
            updatedcart.products = updatedcart.products.filter(prod => prod.id !== productId);
            updatedcart.totalPrice = updatedcart.totalPrice - productPrice * productQty;

            fs.writeFile(pt, JSON.stringify(updatedcart), err => {
                if (err) console.log(err);
            });
        });
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
};
