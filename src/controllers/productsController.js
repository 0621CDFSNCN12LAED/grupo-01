const fs = require("fs");
const path = require("path");
// const multer = require("multer");
// const { monitorEventLoopDelay } = require("perf_hooks");
// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const appService = require("../services/appService");

const controller = {
  
  index: (req, res) => {
    const notEraseProducts = appService.findAll();
    res.render("products", { products: notEraseProducts });
  },

  detail: (req, res) => {
    const productEncontrado = appService.findById(req.params.id);
    if (productEncontrado && (productEncontrado.deleted == false)) {
      res.render("product-detail", { elegido : productEncontrado });
    } else {
      res.send("El producto ya no existe o nunca existio");
    }
  },

  create: (req, res) => {
    res.render("createProduct");
  },

  // Create
  store: (req, res) => {
    appService.createProduct(req.body, req.file)
    res.redirect("/products");
  },

  // Update 
  edit: (req, res) => {
    const productEncontrado = appService.findById(req.params.id);
    res.render("editProduct", { elegido : productEncontrado } );
  },
 
  update: (req, res) => {
    appService.editOne(req.params.id, req.body, req.file)
    res.redirect("/products");
  },

  destroy: (req, res) => {
    appService.deleteProduct(req.params.id);
    res.redirect("/products");
  }
};

module.exports = controller;


  // destroy: (req, res) => {
  //   let productIndex = products.findIndex(function(product) {
  //     return product.id == req.params.id
  // })
  //     products.splice(productIndex, 1)
  //     writeJson()
  //     res.redirect("/products")

  // }