const express = require("express");
const router = express.Router();
const path = require("path");


const configMulter = require("../middlewares/productMulter")

const productsController = require("../controllers/productsController");



//1. /products (GET)Listado de productos
router.get("/", productsController.index);


router.get("/detail/:id", productsController.detail);


router.get("/create", productsController.create); //Showform
router.post("/create", configMulter.single("image"), productsController.store);


router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", configMulter.single("image"), productsController.update);

//Eliminar producto
router.delete("/delete/:id", productsController.destroy);

module.exports = router;
