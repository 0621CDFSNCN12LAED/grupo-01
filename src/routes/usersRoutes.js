const express = require('express');
const router = express.Router();
const path = require("path");

// Controlador
const usersController = require('../controllers/userController');
// Middlewares (todavia no se estan usando)
const configMulter = require("../middlewares/productMulter");

// Registro
router.get('/register', usersController.register);

// Procesando el registro
router.post('/register', usersController.processRegister);

// Login
router.get('/login', usersController.login);

// Procesando el login
router.post('/login', usersController.processLogin);

// Perfil Usuario
router.get('/user-profile/', usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;