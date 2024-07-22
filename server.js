const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("http://localhost:${port}");
});

class ProductManager {
  constructor(title, description, price, thumbnail, code, stock) {
    this.products = [];
    this.idCounter = 0;

    this.title = title;
    this.description = description;
    this.price = price;
    this.thumbnail = thumbnail;
    this.code = code;
    this.stock = stock;
  }

  addProduct(productAdd) {
    const { title, description, price, thumbnail, code, stock } = productAdd;

    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };

    this.products = [...this.products, newProduct];
  }

  getProducts() {
    // const prods = this.product
    this.products.forEach((prod) => {
      console.log("prods:", prod);
      return prod;
    });
  }

  getProductById(idProd) {
    // const prods = this.product
    this.products.forEach((prod) => {});
  }
}
