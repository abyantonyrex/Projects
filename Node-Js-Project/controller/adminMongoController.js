const Product = require("../Model/MongoDbProduct");  // your Product mongoose model
const Cart = require("../Model/MongoDbCart");        // your Cart mongoose model
console.log("adminMongoController.js IS LOADED");

// Render Add Product Page
exports.addProduct_get = (req, resp) => {
  resp.render("Ejs-Pages/EditProduct.ejs", {
    Pagetitle: "Add Page",
    path: "/add-product",
    editing: false,
    product: {}
  });
};

// Handle Add Product Form POST
exports.addProductPost = async (req, resp) => {
  const { imageUrl, title, desc, price, delivery } = req.body;
  const newProduct = new Product({
    imageUrl,
    title,
    desc,
    price,
    delivery
  });
  await newProduct.save();
  resp.redirect("/admin-product");
};

// Render Edit Product Page
exports.editProduct_get = async (req, resp) => {
  const editMode = req.query.edit === "true";
  if (!editMode) return resp.redirect('/');
  const prodId = req.params.productId;
  const prod = await Product.findById(prodId);
  if (!prod) return resp.redirect('/');
  resp.render("Ejs-Pages/EditProduct", {
    Pagetitle: "Edit Page",
    path: "/edit-product",
    editing: editMode,
    product: prod,
  });
};

// Handle Edit Product POST
exports.editProduct_post = async (req, resp) => {
  const prodId = req.body.productId;
  const { imageUrl, title, desc, price, delivery } = req.body;
  await Product.findByIdAndUpdate(prodId, {
    imageUrl,
    title,
    desc,
    price,
    delivery
  });
  resp.redirect("/admin-product");
};

// Delete Product from Products (and from Cart)
exports.deleteProduct = async (req, resp) => {
  const prodId = req.body.productId;
  await Product.findByIdAndDelete(prodId);

  // Optionally, remove from all carts
  let cart = await Cart.findOne();
  if (cart) {
    const cartProduct = cart.products.find(p => p.id === prodId);
    if (cartProduct) {
      const prod = await Product.findById(prodId);
      cart.products = cart.products.filter(p => p.id !== prodId);
      if (prod) {
        cart.totalPrice -= Number(prod.price) * cartProduct.qty;
      }
      await cart.save();
    }
  }

  resp.redirect('/');
};

// Add product to cart
exports.shop_cart_post = async (req, resp, next) => {
  const prodId = Array.isArray(req.body.productId) ? req.body.productId[0] : req.body.productId;
  const product = await Product.findById(prodId);
  if (!product) {
    console.log("Product not found:", prodId);
    return resp.status(404).send("Product not found");
  }

  let cart = await Cart.findOne();
  if (!cart) {
    cart = new Cart({ products: [], totalPrice: 0 });
  }

  const existingProduct = cart.products.find(p => p.id === prodId);
  if (existingProduct) {
    existingProduct.qty += 1;
  } else {
    cart.products.push({ id: prodId, qty: 1 });
  }
  cart.totalPrice += Number(product.price);

  await cart.save();
  resp.redirect("/cart");
};

// // Remove one quantity or remove product if qty === 1
// exports.cartDeleteProduct = async (req, resp) => {
//   const prodId = Array.isArray(req.body.productId) ? req.body.productId[0] : req.body.productId;
//   let cart = await Cart.findOne();
//   if (!cart) return resp.redirect('/cart');

//   const cartProduct = cart.products.find(p => p.id === prodId);

//   if (cartProduct) {
//     const prod = await Product.findById(prodId);

//     if (cartProduct.qty > 1) {
//       cartProduct.qty -= 1;
//       if (prod) {
//         cart.totalPrice -= Number(prod.price);
//       }
//     } else if (cartProduct.qty === 1) {
//       // Remove product when qty is exactly 1
//       cart.products = cart.products.filter(p => p.id !== prodId);
//       if (prod) {
//         cart.totalPrice -= Number(prod.price);
//       }
//     }

//     // Prevent negative total price
//     if (cart.totalPrice < 0) cart.totalPrice = 0;

//     await cart.save();
//   }

//   resp.redirect('/cart');
// };


 // Decrement product quantity in cart (remove if qty reaches 0)
exports.cartDecrementProduct = async (req, resp) => {
  console.log("DECREMENT called");
  const prodId = Array.isArray(req.body.productId) ? req.body.productId[0] : req.body.productId;
  let cart = await Cart.findOne();
  const product = await Product.findById(prodId);
  if (!cart || !product) return resp.redirect('/cart');
  
  const cartProduct = cart.products.find(p => p.id === prodId);
  if (cartProduct) {
    if (cartProduct.qty > 1) {
      cartProduct.qty -= 1;
      cart.totalPrice -= Number(product.price);
    } else {
      cart.products = cart.products.filter(p => p.id !== prodId);
      cart.totalPrice -= Number(product.price);
    }
    if (cart.totalPrice < 0) cart.totalPrice = 0;
    await cart.save();
  }
  resp.redirect('/cart');
};

// Increment product quantity in cart
exports.cartIncrementProduct = async (req, resp) => {
    console.log("INCREMENT called");
 const prodId = Array.isArray(req.body.productId) ? req.body.productId[0] : req.body.productId;
  let cart = await Cart.findOne();
  const product = await Product.findById(prodId);
  if (!cart || !product) return resp.redirect('/cart');

  const cartProduct = cart.products.find(p => p.id === prodId);
  if (cartProduct) {
    cartProduct.qty += 1;
    cart.totalPrice += Number(product.price);
    await cart.save();
  }
  resp.redirect('/cart');
};

// Remove all of a product from cart
exports.cartDeleteAllProduct = async (req, resp) => {
    console.log("DELETE ALL called");
  const prodId = Array.isArray(req.body.productId) ? req.body.productId[0] : req.body.productId;
  let cart = await Cart.findOne();
  const product = await Product.findById(prodId);
  if (!cart || !product) return resp.redirect('/cart');

  const cartProduct = cart.products.find(p => p.id === prodId);
  if (cartProduct) {
    cart.totalPrice -= Number(product.price) * cartProduct.qty;
    if (cart.totalPrice < 0) cart.totalPrice = 0;
    cart.products = cart.products.filter(p => p.id !== prodId);
    await cart.save();
  }
  resp.redirect('/cart');
};



// List all Products for Admin
exports.admin_Products = async (req, resp) => {
  const prod = await Product.find();
  resp.render('Ejs-Pages/AdminProduct', {
    Pagetitle: "Admin Page",
    userProduct: prod,
    productRes: prod.length > 0,
    path: '/admin-product'
  });
};
