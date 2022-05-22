/* 
 Erőforrás:

 Product{
   id: string,
   name: string,
   price: number,
   isinStock: boolean
 };

Operációk:

Create, Read, Update, Delete (CRUD)
*/

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const { log } = require("console");

// Read
app.get("/products", (req, res) => {
  fs.readFile('./data/products.json', (err, file) =>{
    res.send(JSON.parse(file))
  })
});

// Read by id
app.get("/products/:egyediAzonosito", (req, res) => {
  const id = req.params.egyediAzonosito;

  fs.readFile('./data/products.json', (err, file) => {
    const products = JSON.parse(file);
    const productById = products.find(product => product.id === id);
    console.log(productById);

    if(!productById){
      res.status(404);
      res.send({error: `id: ${id} not found`});
      return;
    }
    res.send(productById);
  })
});


// Create
app.post("/products", bodyParser.json(), (req, res) => {
  
  const newProduct = {
    id:createUUID(),
    name:sanitizeString(req.body.name),
    price: Number(req.body.price),
    isInStock: Boolean(req.body.isInStock)
  }

  fs.readFile("./data/products.json", (err, file ) => {
    const products = JSON.parse(file);
     products.push(newProduct);
     fs.writeFile('./data/products.json', JSON.stringify(products), (err) => {
    res.send(newProduct);
     })
  });

  res.send("POST /products");
});

// Update
app.put("/products/:egyediAzonosito",bodyParser.json(), (req, res) => {
  const id = req.params.egyediAzonosito;

  fs.readFile('./data/products.json', (err, file) => {
    const products = JSON.parse(file);
    const productIndexById = products.findIndex(product => product.id === id);
    

    if(productIndexById === -1){
      res.status(404);
      res.send({error: `id: ${id} not found`});
      return;
    }

    const updatedProduct = {
      id:id,
      name:sanitizeString(req.body.name),
      price: Number(req.body.price),
      isInStock: Boolean(req.body.isInStock)
    }
  
    products[productIndexById] = updatedProduct;
    fs.writeFile('./data/products.json', JSON.stringify(products), () => {
      res.send(updatedProduct);
     })
   })
});

// Delete
app.delete("/products/:egyediAzonosito", (req, res) => {
  const id = req.params.egyediAzonosito;

  fs.readFile('./data/products.json', (err, file) => {
    const products = JSON.parse(file);
    const productIndexById = products.findIndex(product => product.id === id);
    

    if(productIndexById === -1){
      res.status(404);
      res.send({error: `id: ${id} not found`});
      return;
    }

    products.splice(productIndexById, 1);
    fs.writeFile('./data/products.json', JSON.stringify(products), () => {
      res.send({id: id});
     })
   })
});

app.listen(3000);

function sanitizeString(str){
  str = str.replace(/[^a-z0-9áéíóúñü_-\s\.,]/gim,"");
  return str.trim();
  }

  function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}
  