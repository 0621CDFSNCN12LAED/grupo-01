const path = require("path");
const { body } = require('express-validator');

const editValidations = [
    body('name')
        .notEmpty()
        .withMessage("Debes completar el campo") 
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener de 4 a 20 caracteres"), 
    body('username')
        .notEmpty()
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener de 4 a 20 caracteres"),
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
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({min:4, max:30})
        .withMessage("Debe tener de 4 a 30 caracteres"),
    body('password')
        .notEmpty()
        .withMessage("No escribiste")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Malisima, muy corta.. o muy larga"),
    // body('avatar').custom((value, { req }) => {
    //     let acepted = ['.jpeg', '.png', '.gif'];
    //     let fileExtension = path.extname(file.originalname);
    //     if (!acepted.includes(fileExtension)) {
    //         throw new Error (`Solo se permiten ${acepted.join(', ')}`) 
    //           return true 
    //     } else {
    //         return true
    //     }
    // })                     no estaria funcionando bien
]

module.exports = editValidations