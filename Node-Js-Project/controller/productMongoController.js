const Product = require("../Model/MongoDbProduct");
const Cart = require("../Model/MongoDbCart");

// Renders Home Page with products from MongoDB
exports.home_Products_Mongo = async (req, resp) => {
  try {
    const prod = await Product.find();
    resp.render("Ejs-Pages/Home", {
      Pagetitle: "Home Page (MongoDB)",
      userProduct: prod,
      productRes: prod.length > 0,
      path: "/",
    });
  } catch (err) {
    resp.status(500).send("Error fetching products");
  }
};

// Renders Product Page from MongoDB
exports.product_Mongo = async (req, resp, next) => {
  try {
    const prod = await Product.find();
    // console.log("Products fetched from DB:", prod);
    resp.render("Ejs-Pages/Product", {
      Pagetitle: "Product Page (MongoDB)",
      userProduct: prod,
      productRes: prod.length > 0,
      path: "/product",
    });
  } catch (err) {
    resp.status(500).send("Error fetching products");
  }
};

// Renders Product Description from MongoDB
exports.product_description_Mongo = async (req, resp, next) => {
  try {
    const productId = req.params.productId;
    const prodDetails = await Product.findById(productId);
    resp.render("Ejs-Pages/ProductDescription", {
      Pagetitle: "Product Description (MongoDB)",
      product: prodDetails,
      path: "/product-description",
    });
  } catch (err) {
    resp.status(500).send("Error fetching product description");
  }
};



// Show cart products
exports.cart_products = async (req, resp, next) => {
  const cartData = await Cart.findOne();
  const cartProduct = [];
  let total = 0;

  if (cartData && cartData.products.length > 0) {
    const productIds = cartData.products.map(item => item.id);
    const products = await Product.find({ _id: { $in: productIds } });

    for (const pro of products) {
      const cartProductData = cartData.products.find(prod => prod.id === pro._id.toString());
      if (cartProductData) {
        cartProduct.push({ productData: pro, qty: cartProductData.qty });
        total += Number(pro.price) * cartProductData.qty; // Add this line
      }
    }
  }

  resp.render("Ejs-Pages/Cart", {
    Pagetitle: "Cart Page",
    path: "/cart",
    products: cartProduct,
    totalPrice: total,
  });
};

// Show order products
exports.order_products = async (req, resp, next) => {
  const cartData = await Cart.findOne();
  const cartProduct = [];
  let total = 0;

  if (cartData && cartData.products.length > 0) {
    const productIds = cartData.products.map(item => item.id);
    const products = await Product.find({ _id: { $in: productIds } });

    for (const pro of products) {
      const cartProductData = cartData.products.find(prod => prod.id === pro._id.toString());
      if (cartProductData) {
        cartProduct.push({ productData: pro, qty: cartProductData.qty });
        total += Number(pro.price) * cartProductData.qty; // Add this line
      }
    }
  }

  resp.render("Ejs-Pages/Order", {
    Pagetitle: "Order Page",
    path: "/order",
    products: cartProduct,
    totalPrice: total,
  });
};

