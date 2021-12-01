// Todos los require
const fs = require("fs");
const path = require("path");
const multer = require("multer");
const db = require("../../database/models/index");
const imageDefault =  "sinImagenUsuario.png";
const bcryptjs = require("bcryptjs");

const userService = require("../services/userService");
const { validationResult } = require("express-validator");
const { Console } = require("console");


// completar

const controller = {
    register: (req, res) => {
		res.render("tutuni-register");
	},
    processRegister: async (req, res) => {
        const resultValidation = validationResult(req)
    //   res.send(resultValidation.errors)
        if (resultValidation.errors.length > 0) {
            res.render("tutuni-register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }
    
        const userInModel = await db.Users.findAll({
                where: {email: req.body.email}
        })
        
        if (userInModel.length > 0) {
            console.log(userInModel)
                return res.render("tutuni-register", {
                    errors: {
                        email: {
                            msg:"Este email ya esta registrado"
                        }
                    },
                    oldData: req.body
                })
        } else {

        const biggestId = await db.Users.max("id")
        await db.Users.create({ 
            id : biggestId + 1,
            image : req.file ? req.file.filename : imageDefault,
            fullName : req.body.name,
            username : req.body.username,
            email : req.body.email,
            birthdate : req.body.birthdate,
            password: bcryptjs.hashSync(req.body.password, 10),
            confirmPassword: bcryptjs.hashSync(req.body.password, 10),
            deleted : Number(0),
            rolesId : 1
        })
        res.redirect("/users")
        }
        
    
    },
    login: (req, res) => {
		return res.render('tutuni-login');
	},
    processLogin: async (req,res) =>{

        const userToLogin = await userService.findByEmail(req.body.email)

        console.log(userToLogin)


        if (userToLogin){
            console.log(req.body.password)
            console.log(userToLogin.password)

           


            const correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)
            console.log(correctPassword) // deberia dar true cuando se pone bien contraseña 
                                         // pero da false siempre, en profile probe uno simple y anduvo
            
            if (correctPassword) {
                return res.send("buena")
            } else {
                return res.redirect('login')
            }
        } 

        return res.render('tutuni-login', {
            errors: {
                email: {
                    msg: 'No existe esta direccion de correo'
                }
            }
        })

    },
    profile: async (req, res) => {

        // Probando buscando directamente el usuario de tutuni

        const usuario = await db.Users.findOne({
            where: {id:15}
        })
        const contraseTutuni = usuario.password
        console.log(usuario)
        console.log(contraseTutuni)

        const constrase = '123456'
        


        const ejemplo = bcryptjs.compareSync(constrase, contraseTutuni)
        console.log(ejemplo) 

        const password = "contraseña1"
        const hashPassword = bcryptjs.hashSync("contraseña1", 10)

        const correctPassword = bcryptjs.compareSync(password, hashPassword)
        console.log(correctPassword) // este si da true


        const user = await db.Users.findByPk(req.params.id);
        res.render('user-detail', { user })
    },

    logout: (req, res) =>{

        return res.redirect('/');
    },
    index: async (req, res) =>{
        const users = await db.Users.findAll()
        res.render('users', {users: users})
    },

    destroy: async (req, res) => {
        await db.Users.destroy({
            where: {id: req.params.id}
        })
        res.redirect('/users')
    }
}

module.exports = controller;