const { body } = require('express-validator');
const db = require('../../database/models');

const validations = [
    body('name')
        .notEmpty()
        .withMessage('Debe ingresar su nombre completo') 
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
        .not().isEmpty()
        .withMessage("Debes ingresar una fecha"),
    body('email')
        .notEmpty()
        .withMessage('Debe ingresar algun e-mail')
        .bail()
        .isEmail()
        .withMessage('La dirección de e-mail ingresada no es válida')
        .bail()
        //   https://express-validator.github.io/docs/custom-validators-sanitizers.html
        .custom((value, { req }) => {
          return db.Users.findOne({
            where: {
              email: req.body.email,
            },
          }).then((user) => {
            if (user) {
              return Promise.reject('Este correo ya existe');
            }
          });
        }),
    body('adress')
        .notEmpty()
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({ min:4, max:30 })
        .withMessage("Debe tener de 4 a 30 caracteres"),
    body('password')
        .notEmpty()
        .withMessage('Debe ingresar una contraseña')
        .bail()
        .isLength({ min:4 })
        .withMessage("La contraseña debe tener por lo menos 4 caracteres")
        .bail()
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
              throw new Error('Las contraseñas no coinciden');
            }
            return true;
        }),
    body('confirmPassword')
        .notEmpty()
        .withMessage("Debes completar el campo")
        .bail()
        .isLength({min:4, max:20})
        .withMessage("No sirve"),
]

module.exports = validations;

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