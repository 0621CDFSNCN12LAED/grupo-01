
const { body } = require('express-validator');

const loginValidations = [

    body('email')
        .notEmpty()
        .withMessage("Debes completar este casillero")
        .bail()
        .isEmail()
        .withMessage("Debes completar con una direccion de email")
        .bail()
        .isLength({min:5, max:30})
        .withMessage("El email debe ser de 5 a 30 caracteres"),
    body('password')
        .notEmpty()
        .withMessage("No escribiste")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Malisima, muy corta... o muy larga"),
]

module.exports = loginValidations // Los mensajes no los estamos usando 