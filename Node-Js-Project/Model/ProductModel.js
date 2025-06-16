let path = require("path");
let fs = require("fs");

const pt = path.join(
  path.dirname(require.main.filename),
  "data",
  "product.json"
);

let readTheData = (cb) => {
  fs.readFile(pt, (err, fileContent) => {
    if (err) {
      return cb([]);
    } else {
      try {
        cb(JSON.parse(fileContent));
      } catch (e) {
        console.error("Error parsing JSON file:", e);
      }
    }
  });
};

module.exports = class Mproduct {
  constructor({ title, desc, price, delivery, imageUrl, id }) {
    this.id = id || Math.random().toString();
    this.imageUrl = imageUrl;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.delivery = delivery;
  }

  save() {
    readTheData((product) => {
      const existingProductIndex = product.findIndex((p) => p.id === this.id);
      if (existingProductIndex !== -1) {
        const UpdatedProduct = [...product];
        UpdatedProduct[existingProductIndex] = this;
        fs.writeFile(pt, JSON.stringify(UpdatedProduct), (err) => {
          console.log(err);
        });
      } else {
        // this.id = Math.random().toString();
        product.push(this);
        fs.writeFile(pt, JSON.stringify(product), (err) => {
          console.log(err);
        });
      }
    });
  }

  static findById(id, cb) {
    readTheData((product) => {
      const prodDetails = product.find((p) => p.id === id);
      cb(prodDetails);
    });
  }
  
  static deleteById(id){
    readTheData(products =>{
      const updatedProduct = products.filter(p=> p.id !== id)
      fs.writeFile(pt,JSON.stringify(updatedProduct), err=> {
        cart.deleteProduct(id,products.price)
      }
    )
  })
}
static fetchAll(cb) {
  readTheData(cb);
}
};
