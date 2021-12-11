const express = require("express");
const router = express.Router();
const path = require("path");


const configMulter = require("../middlewares/productMulter")
const productValidations = require("../middlewares/productValidator")
const productsController = require("../controllers/productsController");
const authMiddleware = require("../middlewares/authMiddleware")
const adminMiddleware = require("../middlewares/adminMiddleware")



//1. /products (GET)Listado de productos
router.get("/", productsController.index);


router.get("/detail/:id", productsController.detail);


router.get("/create", authMiddleware, adminMiddleware, productsController.create); //Showform
router.post("/create", configMulter.single("image"), productValidations, productsController.store);


router.get("/edit/:id", authMiddleware, adminMiddleware, productsController.edit);
router.put("/edit/:id", configMulter.single("image"), productsController.update);

//Eliminar producto
router.put("/delete/:id", authMiddleware, adminMiddleware, productsController.destroy);

module.exports = router;
