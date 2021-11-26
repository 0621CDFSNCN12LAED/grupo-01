const fs = require("fs");
const path = require("path");
const db = require("../../database/models/index");
// const multer = require("multer");
// const { monitorEventLoopDelay } = require("perf_hooks");
// const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const appService = require("../services/appService");

const controller = {

  index: async (req, res) => {
    const products = await db.Products.findAll(
      {
        where: { deleted: false }
      }
    );
    res.render("products", { products });
  },

  detail: async (req, res) => {
    const product = await db.Products.findByPk(req.params.id);
    res.render('product-detail', { elegido: product });
  },

  create: async (req, res) => {
    const categories = await db.Categories.findAll();
    res.render("createProduct", { categories });
  },

  store: async (req, res) => {

    //prueba para sacar el id - chequear mas adelante
const allProducts = await db.Products.findAll()
const lastId = allProducts.length

    await db.Products.create(
      {
        id : lastId + 1,
        name : req.body.name,
        categoryId : Number(req.body.category),
        stock : Number(req.body.stock),
        size : req.body.talles,
        price : Number(req.body.price),
        discount : Number(req.body.discount),
        deleted : Number(0),
        image : req.file.filename,
        //envio gratis  ---   no esta agregado a la base de datos
        description : req.body.description
  
      }
    )
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