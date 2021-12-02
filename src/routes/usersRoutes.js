const express = require('express');
const router = express.Router();
const path = require("path");



// Controlador
const usersController = require('../controllers/userController');
// Middlewares
const configMulter = require("../middlewares/userMulter");
const validations = require("../middlewares/usersValidator");
const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

// Registro
router.get('/register', guestMiddleware, usersController.register);

// Procesando el registro
router.post('/register', configMulter.single('avatar'), validations, usersController.processRegister);

// Login
router.get('/login', guestMiddleware, usersController.login);

// Procesando el login
router.post('/login', usersController.processLogin);

// Perfil Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Editar usuario
router.get("/profile/edit", authMiddleware, usersController.edit);
router.put("/profile/editado", configMulter.single('avatar'), usersController.update);

// Logout
router.get('/logout/', usersController.logout);

// Listado de usuarios
router.get('/', usersController.index)

// Borrar usuarios (mas que nada para probar)
router.delete("/delete/:id", usersController.destroy);

router.get('/logout', usersController.logout)

module.exports = router;