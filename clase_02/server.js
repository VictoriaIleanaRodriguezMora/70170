const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  // console.log(`http://localhost:${port}`);
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
      title: title,
      description: description,
      price: price,
      thumbnail: thumbnail,
      code: code,
      stock: stock,
      idCounter: this.idCounter++,
    };

    this.products = [...this.products, newProduct];
  }

  getProducts() {
    if (this.products.length === 0) {
      return "No hay productos";
    } else {
      console.log("Estos son los productos");
      // console.log(this.products); // Mientras desarrollan, pongan console.logs, cuando estan seguros que funciona los sacan/comentan.
      return this.products;
    }
  }

  getProductById(idProd) {
    const prodToFind = this.products.find((product) => product.idCounter === idProd);

    if (prodToFind === undefined) {
      console.log(`No existe un producto con el ID ${idProd}`);
      return `No existe un producto con el ID ${idProd}`;
    }

    console.log(`Este es el producto con id ${idProd}`);
    console.log(JSON.stringify(prodToFind, null, 2));
    return `Este es el producto con id ${prodToFind.idCounter}  ${prodToFind}`
  }
}

const NewCustomer = new ProductManager();

NewCustomer.getProducts(); // No se ve la respuesta, porque los returns no se muestran por consola.
console.log(NewCustomer.getProducts()); // Para ver el valor del return de una funciona, para ver lo que devuelve una funcion, hay que hacerle un console.log

// Porque en código a escala, no deben haber console logs en las funciones.

const productToAdd = {
  title: "title prod",
  description: "description prod",
  price: 100,
  thumbnail: "thumbnail prod",
  code: "abc123",
  stock: 50,
};

NewCustomer.addProduct(productToAdd);
NewCustomer.addProduct(productToAdd);
NewCustomer.addProduct(productToAdd);

console.log(NewCustomer.getProducts()); //

NewCustomer.getProductById(1);
