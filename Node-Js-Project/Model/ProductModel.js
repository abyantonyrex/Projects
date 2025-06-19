let path = require("path");
let fs = require("fs");
const Cart = require("../Model/Cart");

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
    this.imageUrl = imageUrl.trim();
    this.title = title.trim();
    this.desc = desc.trim();
    this.price = price.trim();
    this.delivery = delivery.trim();
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

  static deleteById(id) {
    readTheData((products) => {
      const product = products.find((p) => p.id === id);
      const updatedProducts = products.filter((p) => p.id !== id);

      fs.writeFile(pt, JSON.stringify(updatedProducts, null, 2), (err) => {
        if (!err && product) {
          Cart.deleteProduct(id, product.price); // Make sure product.price is passed
        }
      });
    });
  }
  static fetchAll(cb) {
    readTheData(cb);
  }
};
