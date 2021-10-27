// Todos los require
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const userService = require("../services/userService");
const { validationResult } = require("express-validator");


// completar

const controller = {
    register: (req, res) => {
		res.render("tutuni-register");
	},
    processRegister: (req, res) => {
        const resultValidation = validationResult(req)
    //   res.send(resultValidation.errors)
        if (resultValidation.errors.length > 0) {
            res.render("tutuni-register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {

        userService.create(req.body, req.file)
        res.redirect("/users")
        }
        
    },
    login: (req, res) => {
		return res.render('futura pagina de login');
	},
    processLogin: (req,res) =>{

    },
    profile: (req, res) => {
        const user = userService.findById(req.params.id);
        res.render('user-detail', { user })
    },

    logout: (req, res) =>{

        return res.redirect('/');
    },
    index: (req, res) =>{
        const users = userService.findAll()
        res.render('users', {users: users})
    }
}

module.exports = controller;