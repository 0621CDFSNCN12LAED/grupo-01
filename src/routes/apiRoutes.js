const express = require("express");
const router = express.Router();

const apiProducts = require("../controllers/apiControllers/apiProducts")
const apiUsers = require("../controllers/apiControllers/apiUsers")

// Lista de productos y detalle
router.get("/products", apiProducts.list);
router.get("/products/:id", apiProducts.detail);

// Lista de usuarios y detalles
router.get("/users", apiUsers.list);
router.get("/users/:id", apiUsers.detail);



module.exports = router;