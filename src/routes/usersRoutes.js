const express = require('express');
const router = express.Router();
const path = require("path");



// Controlador
const usersController = require('../controllers/userController');
// Middlewares
const configMulter = require("../middlewares/userMulter");
const validations = require("../middlewares/usersValidator");
const loginValidations = require("../middlewares/userLoginValidator");
const editUserValidation = require("../middlewares/userEditValidation")

const guestMiddleware = require("../middlewares/guestMiddleware")
const authMiddleware = require("../middlewares/authMiddleware")

// Registro
router.get('/register', guestMiddleware, usersController.register);

// Procesando el registro
router.post('/register', configMulter.single('avatar'), validations, usersController.processRegister);

// Login
router.get('/login', guestMiddleware, usersController.login);

// Procesando el login
router.post('/login', loginValidations, usersController.processLogin);

// Perfil Usuario
router.get('/profile', authMiddleware, usersController.profile);

// Editar usuario
router.get("/profile/edit", authMiddleware, usersController.edit);
router.put("/profile/editado", configMulter.single('avatar'), editUserValidation, usersController.update);

// Logout
router.get('/logout', usersController.logout);

// Listado de usuarios
router.get('/', usersController.index)

// Borrar usuarios (mas que nada para probar)
router.delete("/delete/:id", usersController.destroy);

// Likes
router.get('/profile/likes', authMiddleware, usersController.likes)
router.get('/profile/likes/:id', authMiddleware, usersController.addLike)
router.get('/profile/likes/delete/:id', authMiddleware, usersController.deleteLike)

module.exports = router;