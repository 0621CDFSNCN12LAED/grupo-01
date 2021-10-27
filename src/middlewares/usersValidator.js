const path = require("path");
const { body } = require('express-validator');

const validations = [
    body('name')
        .not().isEmpty() //el notEmpty() aparentemente no existe mas o tiene errores
        .isLength({min:4, max:20})
        .withMessage("Debes completar el campo"),
    body('username')
        .not().isEmpty()
        .isLength({min:4, max:20})
        .withMessage("Debes completar el campo"),
    body('birthdate')
        .not().isEmpty(),
    body('email')
        .not().isEmpty()
        .isEmail()
        .withMessage("Debes completar con una direccion de email"),
    body('adress')
        .not().isEmpty()
        .isLength({min:4, max:30})
        .withMessage("Debes completar el campo"),
    body('password')
        .not().isEmpty()
        .isLength({min:4, max:20})
        .withMessage("no escribiste o es una contraseña malisima"),
    body('confirmPassword')
        .not().isEmpty()  
        .isLength({min:4, max:20})
        .withMessage("Debes completar el campo"),
    // body('avatar').custom((value, { req }) => {
    //     let acepted = ['.jpeg', '.png', '.gif'];
    //     let fileExtension = path.extname(file.originalname);
    //     if (!acepted.includes(fileExtension)) {
    //         throw new Error (`Solo se permiten ${acepted.join(', ')}`) 
    //           return true 
    //     } else {
    //         return true
    //     }
    // })
]

module.exports = validations