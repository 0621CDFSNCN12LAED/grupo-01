const { body } = require('express-validator');

const productValidations = [
    body('name')
        .notEmpty()
        .withMessage("Debes completar el campo") 
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener de 4 a 20 caracteres"), 
    body('description')
        .notEmpty()
        .withMessage("Debes contener una descripcion")
        .bail()
        .isLength({min:10, max:250})
        .withMessage("Debe tener de 10 a 250 caracteres"),
    // body('image').custom((value, { req }) => {
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

module.exports = productValidations // todavia no las estamos usando