const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

/* GET home page. */
router.get("/", mainController.home);
router.get("/buscar", mainController.buscar);
// router.get("/carrito", mainController.carrito);
router.get("/recuperar", mainController.recuperar);
// router.get("/tutuni-login", mainController.login);
// router.get("/tutuni-register", mainController.register);
//router.get("/product-detail", mainController.productDetail);

//ACA HAY UN ERROR DONDE DOS RUTAS LLEVAN A LA MISMA PÁGINA
// "HABRIA QUE QUITAR ESTAS DE RECUPERAR TUTUNI-LOGIN- REGISTER"
// YA QUE ESTAS YA ESTAN EN LAS RUTAS DE USERS



module.exports = router;
