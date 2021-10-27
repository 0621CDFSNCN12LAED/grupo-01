const express = require('express');
const router = express.Router();
const path = require("path");



// Controlador
const usersController = require('../controllers/userController');
// Middlewares
const configMulter = require("../middlewares/userMulter");
const validations = require("../middlewares/usersValidator");

// Registro
router.get('/register', usersController.register);

// Procesando el registro
router.post('/register', configMulter.single('avatar'), validations, usersController.processRegister);

// Login
router.get('/login', usersController.login);

// Procesando el login
router.post('/login', usersController.processLogin);

// Perfil Usuario
router.get('/user-profile/:id', usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

// Listado de usuarios
router.get('/', usersController.index)

module.exports = router;