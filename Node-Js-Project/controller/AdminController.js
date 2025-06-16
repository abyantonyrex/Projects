let product = require('../Model/ProductModel')
const Cart = require("../Model/Cart");



exports.addProduct_get = (req, resp, next) => {
  //  resp.sendFile(path.join(global ,'/pages/Product.html'))
  //  resp.render('Product' , {Pagetitle: 'Home Page-hbs' , layout : false})
  resp.render("Ejs-Pages/EditProduct.ejs", {
    Pagetitle: "Add Page",
    path: "/add-product",
    editing: false,
    product:product
  });
};

exports.addProductPost = (req, resp) => {
  // console.log(req.body);
  //   product.push({title: req.body.title})
  const newProduct = new product({
    imageUrl:req.body.imageUrl,
    title:req.body.title,
    desc: req.body.desc,
    price: req.body.price,
    delivery: req.body.delivery
  })
  newProduct.save();
  resp.redirect("/admin-product");
}



// exports.editProduct = (req, resp, next) => {
  //   resp.render("Ejs-Pages/EditProduct.ejs", {
//     Pagetitle: "Edit Page",
//     path: "/edit-product",
//     editing: true,

//   });
// }



exports.editProduct_get = (req, resp, next) => {
  const editMode = req.query.edit 
  if (editMode == false) {
    return resp.redirect('/');
  }
  const prodId = req.params.productId;
  product.findById(prodId, (prod) => {
    if (!prod) {
      return resp.redirect('/');
    }
    resp.render("Ejs-Pages/EditProduct", {
      Pagetitle: "Edit Page",
      path: "/edit-product",
      editing: editMode,
      product: prod,
    });
  });
};

exports.editProduct_post = (req, resp) => {
  const prodId = req.body.productId;
  const updatedProduct = new product({
    id: prodId,
    title: req.body.title,
    imageUrl: req.body.imageUrl,
    desc: req.body.desc,
    price: req.body.price,
    delivery: req.body.delivery,
  });
  console.log(updatedProduct);
  
  updatedProduct.save();
  resp.redirect("/admin-product");
};

exports.deleteProduct = (req,resp)=>{
  const prodId = req.body.productId;
  product.deleteById(prodId);
  resp.redirect('/')
}

exports.cartDeleteProduct = (req,resp)=>{
  const prodId = req.body.productId;
  product.findById(prodId ,product=>{
    Cart.deleteProduct(prodId,product.price);
    resp.redirect('/cart')
  })
}

exports.admin_Products = (req, resp) => {
  product.fetchAll((prod)=> {
    //  console.log(adminExport.userProduct);
  // resp.sendFile(path.join(global, "/pages/Shop.html"));
  resp.render('Ejs-Pages/AdminProduct',
    {
      Pagetitle: "Admin Page",
      userProduct : prod,
       productRes : prod.length > 0 ,
       path: '/admin-product'
      })
  })
  
}