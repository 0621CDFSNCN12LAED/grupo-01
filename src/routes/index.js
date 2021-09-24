const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

/* GET home page. */
router.get("/", mainController.home);
router.get("/buscar", mainController.buscar);
router.get("/carrito", mainController.carrito);
router.get("/recuperar", mainController.recuperar);
router.get("/tutuni-login", mainController.login);
router.get("/tutuni-register", mainController.register);
router.get("/product-detail", mainController.productDetail);





module.exports = router;
