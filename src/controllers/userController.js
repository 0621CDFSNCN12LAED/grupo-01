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
                            msg: "Este email ya esta registrado"
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
            // confirmPassword: bcryptjs.hashSync(req.body.password, 10),
            deleted : Number(0),
            rolesId : 1
        })
        res.redirect("/tutuni-login")
        }
        
    
    },
    login: (req, res) => {
		return res.render('tutuni-login');
	},
    processLogin: async (req,res) =>{

        const userToLogin = await userService.findByEmail(req.body.email)
        if  (userToLogin){
            const correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password)                                    
            if (correctPassword) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;
                // console.log(req.body, req.session.userLogged)

                if (req.body.remember_user) {
                    res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 }) // (1segundo * 60minutos) * 60veces = 1 hora
                    console.log("se creo la cookie")
                }
                console.log("se creo la cookie")
                console.log(req.session)
                return res.redirect("profile")
            } else {
                return res.render('tutuni-login', {
                    errors: {
                        email: {
                            msg: 'Las credenciales no son validas'
                        }
                    }
                })
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
        
        // const user = await db.Users.findByPk(req.params.id); vamos a usar el session
        res.render('user-detail', { user: req.session.userLogged })
    },

    edit: (req, res) => {
        res.render('userEdit', { user: req.session.userLogged })
    },

    update: async (req, res) => {

       const userFound = await db.Users.findOne({ where: { id: req.session.userLogged.id}});
        const correctPassword = bcryptjs.compareSync(req.body.password, userFound.password) 
        const oldData = req.body
        console.log(oldData)
        if (correctPassword) {
            
    await db.Users.update({
        image : req.file ? req.file.filename : userFound.image,
        fullName : req.body.fullName,
        username : req.body.username,
        email : req.body.email,
        birthdate : req.body.birthdate,
        }, {
            where: {
                id: userFound.id
            }
        })
        res.redirect("/users/profile")

        } else {
            
            // res.redirect("/users/profile/edit", { oldData: req.body }
            res.render("userEdit", { oldData: oldData, user: req.session.userLogged }
            // ,
            // {
            //     errors: {
            //         password: {
            //             msg: 'Esta mal'
            //         }
            //     }
            // }
            )
        }
    },

    logout: (req, res) =>{
        res.clearCookie('userEmail')
        req.session.destroy()
        return res.redirect('/');
    },
    index: async (req, res) =>{
        const users = await db.Users.findAll({
            where: {deleted:false}
        })
        res.render('users', {users: users, actualUser: req.session.userLogged })
    },

    destroy: async (req, res) => {
        res.clearCookie('userEmail')
        req.session.destroy()
        await db.Users.destroy({
            where: {id: req.params.id}
        })
        res.redirect('/users')
    },

    likes: async (req, res) => {
        const user = await db.Users.findByPk( req.session.userLogged.id, {include: ["products"]})
        
        res.render("userLikes", { user })

    },

    addLike: async (req, res) => {
  
        await db.Product_user_fav.create({
            userId: req.session.userLogged.id,
            productId: req.params.id
        })
        
    res.redirect("/products", )
    },

    deleteLike: async (req, res) => {
        await db.Product_user_fav.destroy({
            where: {
                productId: req.params.id
            }
        })
    const user = await db.Users.findByPk( req.session.userLogged.id, {include: ["products"]})

    res.render("userLikes", { user })
    }
}

module.exports = controller;