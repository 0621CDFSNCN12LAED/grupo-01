const fs = require("fs");
const path = require("path");
const db = require("../../database/models/index");
const imageDefault =  "imagenDefault.png"

const appService = require("../services/appService");
const { validationResult } = require("express-validator");

const controller = {

  index: async (req, res) => {
    const products = await db.Products.findAll(
      {
        where: { deleted: false }
      }
    );
    res.render("products", { products, user: req.session.userLogged});
  },

  detail: async (req, res) => {
    const product = await db.Products.findByPk(req.params.id, {include: ["category"]});
    res.render('product-detail', { elegido: product, user: req.session.userLogged });
  },

  create: async (req, res) => {
    const categories = await db.Categories.findAll();
    res.render("createProduct", { categories, user: req.session.userLogged });
  },

  store: async (req, res) => {

    const resultValidation = validationResult(req)
    const categories = await db.Categories.findAll();

    if (resultValidation.errors.length > 0) {
      res.render("createProduct", {
          errors: resultValidation.mapped(),
          oldData: req.body,
          categories
      })
  }
    

 if (resultValidation.errors.length == 0) {
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
        shipping : req.body.shipping,
        deleted : Number(0),
        image : req.file ? req.file.filename : imageDefault,
        //envio gratis  ---   no esta agregado a la base de datos
        description : req.body.description
  
      }
    )
    res.redirect("/products");
  }
},

  // Update 
  edit: async (req, res) => {
    // const productEncontrado = appService.findById(req.params.id);
    const categories = await db.Categories.findAll();
    const productEncontrado = await db.Products.findOne({ where: { id: req.params.id}});
    res.render("editProduct", { elegido : productEncontrado,  categories, user: req.session.userLogged } );
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
        shipping : req.body.shipping,
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
