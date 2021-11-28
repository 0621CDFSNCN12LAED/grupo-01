const fs = require("fs");
const path = require("path");
const { monitorEventLoopDelay } = require("perf_hooks");
const db = require("../../database/models/index");
const Products = require("../../database/models/Products");
const imageDefault =  "imagenDefault.png"
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
        image : req.file ? req.file.filename : imageDefault,
        //envio gratis  ---   no esta agregado a la base de datos
        description : req.body.description
  
      }
    )
    res.redirect("/products");
  },

  // Update 
  edit: async (req, res) => {
    // const productEncontrado = appService.findById(req.params.id);
    const categories = await db.Categories.findAll();
    const productEncontrado = await db.Products.findOne({ where: { id: req.params.id}});
    res.render("editProduct", { elegido : productEncontrado,  categories } );
  },
 
  update: async (req, res) => {
    const productEncontrado = await db.Products.findOne({ where: { id: req.params.id}});
    await db.Products.update({
        name : req.body.name,
        categoryId : Number(req.body.category),
        stock : Number(req.body.stock),
        size : req.body.size,
        price : Number(req.body.price),
        discount : Number(req.body.discount),
        deleted : Number(0),
        image : req.file ? req.file.filename : productEncontrado.image,
                // image ? image.filename : product.image
        //envio gratis  ---   no esta agregado a la base de datos
        description : req.body.description
    },
    { where: {id: req.params.id}})

    res.redirect("/products");
  },
  destroy: async (req, res) => {
    const destroyOne = {
      deleted: 1
    }
    await db.Products.update(destroyOne, {
      where: {
        id: req.params.id,
      },
    });
    res.redirect('/products');
  },

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