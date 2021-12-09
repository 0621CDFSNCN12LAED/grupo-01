const express = require("express");
const router = express.Router();
const path = require("path");

const cartController = require("../controllers/cartController");
const authMiddleware = require("../middlewares/authMiddleware")

// Tu carrito
router.get("/", authMiddleware, cartController.list);

// Si no tenes carrito crearlo, y agregar productos
router.get('/agregar/:id', authMiddleware, cartController.add)

module.exports = router;
