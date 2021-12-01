const path = require("path");
const { body } = require('express-validator');

const validations = [
    body('name')
        .notEmpty()
        .withMessage("Debes completar el campo") 
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener 4 o mas caracteres"),    
    body('username')
        .notEmpty()
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener 4 o mas caracteres"),
    body('birthdate')
        .not().isEmpty(),
    body('email')
        .notEmpty()
        .withMessage("Debes completar este casillero")
        .bail()
        .isEmail()
        .withMessage("Debes completar con una direccion de email"),
    body('adress')
        .notEmpty()
        .withMessage("Esta direccion es muy corta")
        .bail()
        .isLength({min:4, max:30})
        .withMessage("Debes completar el campo"),
    body('password')
        .notEmpty()
        .withMessage("No escribiste")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Malisima, muy corta"),
    body('confirmPassword')
        .notEmpty()
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("No sirve"),
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