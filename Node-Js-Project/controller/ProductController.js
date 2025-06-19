let product = require("../Model/ProductModel");
const Cart = require("../Model/Cart");

exports.home_Products = (req, resp) => {
  product.fetchAll((prod) => {
    //  console.log(adminExport.userProduct);
    // resp.sendFile(path.join(global, "/pages/Shop.html"));
    resp.render("Ejs-Pages/Home", {
      Pagetitle: "Home Page",
      userProduct: prod,
      productRes: prod.length > 0,
      path: "/",
    });
  });
};

exports.product = (req, resp, next) => {
  product.fetchAll((prod) => {
    resp.render("Ejs-Pages/Product", {
      Pagetitle: "Product Page",
      userProduct: prod,
      productRes: prod.length > 0,
      path: "/product",
    });
  });
};

exports.product_description = (req, resp, next) => {
  const productId = req.params.productId;

  // product.fetchAll((products) => {
  //   const selectedProduct = products.find(p => p.id == prodId);

  //   if (!selectedProduct) {
  //     return resp.status(404).send('Product not found');
  //   }
  product.findById(productId, (prodDetails) => {
    resp.render("Ejs-Pages/ProductDescription", {
      Pagetitle: "Product Description Page",
      product: prodDetails,
      path: "/product-description",
    });
  });
};

// console.log("selectedProduct:", selectedProduct);

exports.shop_cart_post = (req, resp, next) => {
  let prodId = req.body.productId;

  product.findById(prodId, (product) => {
     if (!product) {
      console.log("Product not found:", prodId);
      return resp.status(404).send("Product not found");
    }
    Cart.addProduct(prodId, product.price);
    // console.log("Product added to cart:", product);
  });
  resp.redirect("/cart");
};
exports.cart_products = (req, resp, next) => {
  Cart.getCart((cartData) => {
    product.fetchAll((products) => {
      const cartProduct = [];
      for (pro of products) {
        const cartProductData = cartData.products.find((prod) => prod.id === pro.id);
        if (cartProductData) {
          cartProduct.push({ productData: pro, qty: cartProductData.qty });
        }
      }
      resp.render("Ejs-Pages/Cart", {
        Pagetitle: "Cart Page",
        path: "/cart",
        products: cartProduct,
      });
    });
  });
};
exports.order_products = (req, resp, next) => {
  Cart.getOrder((cartData) => {
    product.fetchAll((products) => {
      const cartProduct = [];
      for (pro of products) {
        const cartProductData = cartData.products.find((prod) => prod.id === pro.id);
        if (cartProductData) {
          cartProduct.push({ productData: pro, qty: cartProductData.qty });
        }
      }
      resp.render("Ejs-Pages/Order", {
        Pagetitle: "Order Page",
        path: "/order",
        products: cartProduct,
        totalPrice: cartData.totalPrice,
      });
    });
  });
};
