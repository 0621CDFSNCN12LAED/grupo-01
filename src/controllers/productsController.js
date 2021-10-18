const fs = require("fs");
const path = require("path");
const multer = require("multer");
const { monitorEventLoopDelay } = require("perf_hooks");



//const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
//const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
//ejemplo mati: 
const productsjson = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"));
const products = JSON.parse(productsjson);

function writeJson() {
  let data = JSON.stringify(products, null, 4)
  fs.writeFileSync(path.join(__dirname, "../data/productsDataBase.json"), data)
  return
}

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  
  index: (req, res) => {
    res.render("products", { products });
  },

  detail: (req, res) => {
    let productEncontrado = products.find(function(product) {
      return product.id == req.params.id;
    })
    if (productEncontrado) {
res.render("product-detail", { elegido : productEncontrado });
    } else {
      res.send("error")
    }
    
  },

  create: (req, res) => {
    res.render("createProduct");
  },
  // create: (req, res) => {
  //   res.render("eJEMPLOFORM");
  // },

  
  store: (req, res) => {
  // console.log(req.body)
    let newProduct = {
      
      id: products.length + 1, 
      name: req.body.name,
      //name: "prueba",
      image: req.file.filename,
      category: req.body.category,
      stock: Number(req.body.stock),
      talles: req.body.talles,
      price: Number(req.body.price),
      discount: Number(req.body.discount),
      enviogratis: req.body.enviogratis,
      description: req.body.description
    }
    products.push(newProduct);
    writeJson()
    res.redirect("/products")
  },

  // Update 
  edit: (req, res) => {

    let productEncontrado = products.find(function(product) {
      return product.id == req.params.id;
    })

    res.render("editProduct", { elegido : productEncontrado } );
  },
 
  update: (req, res) => {
    let productEncontrado = products.find(function(product) {
      return product.id == req.params.id
    })
      productEncontrado.name = req.body.name,
      productEncontrado.image = req.file ? req.file.filename : productEncontrado.image,
      productEncontrado.category = req.body.category,
      productEncontrado.stock = Number(req.body.stock),
      productEncontrado.talles = req.body.talles,
      productEncontrado.price = Number(req.body.price),
      productEncontrado.discount = Number(req.body.discount),
      productEncontrado.enviogratis = req.body.enviogratis,
      productEncontrado.description = req.body.description
      
      writeJson()
      res.redirect("/products")
    
  },

  destroy: (req, res) => {
    let productIndex = products.findIndex(function(product) {
      return product.id == req.params.id
  })
      products.splice(productIndex, 1)
      writeJson()
      res.redirect("/products")

  }
};

module.exports = controller;
