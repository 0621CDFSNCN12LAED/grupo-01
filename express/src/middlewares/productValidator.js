const { body } = require('express-validator');

const productValidations = [
    body('name')
        .notEmpty()
        .withMessage("Debes completar el campo") 
        .bail()
        .isLength({min:4, max:20})
        .withMessage("Debe tener de 4 a 20 caracteres"),
    body('image')
        .custom((value, { req }) => {
            let file = req.file;
            if(!file) {
              throw new Error('Debes subir una imagen');
            } else if (file.mimetype == "image/jpg" || file.mimetype == "image/png" || file.mimetype == "image/jpeg"){
              return true;
            } else {
              throw new Error('El archivo debe ser de formato JPG, PNG o JPEG');
            }
        }),
    body('category')
        .notEmpty()
        .withMessage('Debe seleccionar una categoria')
        .bail(),
    body('stock')
        .notEmpty()
        .withMessage('Debe agregar la cantidad del articulo disponible')
        .bail(),
    body('price')
        .notEmpty()
        .withMessage('Debe ingresar un precio')
        .bail(),
    body('discount')
        .notEmpty()
        .withMessage("Debe ingresar descuento, en caso de ser 0 poner '0' ")
        .bail(),
    body('shipping')
        .notEmpty()
        .withMessage("Debe indicar si el envio es gratis o no")
        .bail(),
    body('description')
        .notEmpty()
        .withMessage("Debe contener una descripcion del producto")
        .bail()
        .isLength({ min: 10 })
        .withMessage('La descripción debe contener al menos 10 caracteres'),
]

module.exports = productValidations; // todavia no las estamos usando