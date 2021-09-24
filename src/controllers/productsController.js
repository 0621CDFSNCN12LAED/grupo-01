const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  //
  index: (req, res) => {
    res.render("/products", { products });
  },

  // Detail - Detail from one product
  detail: (req, res) => {
    const product = products.find((prod) => {
      return prod.id == req.param.id;
    });
    if (products) {
      res.render("detail", { products });
    } else {
      res.send("Error");
    }
  },

  // Create - Mostrar form create
  create: (req, res) => {
    res.render("createProduct");
  },

  // Create -  Method to store
  store: (req, res) => {
    // Do the magic
  },

  // Update - Form to edit
  edit: (req, res) => {
    res.render("editProduct");
  },
  // Update - Method to update
  update: (req, res) => {
    // Do the magic
  },

  // Delete - Delete one product from DB
  destroy: (req, res) => {
    // Do the magic
  },
};

module.exports = controller;
