// Todos los require
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// completar

const controller = {
    register: (req, res) => {
		res.render("tutuni-register");
	},
    processRegister: (req, res) => {
        
    },
    login: (req, res) => {
		return res.render('futura pagina de login');
	},
    processLogin: (req,res) =>{

    },
    profile: (req, res) => {

    },
    logout: (req, res) =>{

        return res.redirect('/');
    }
}

module.exports = controller;