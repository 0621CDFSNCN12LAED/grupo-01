const { Users } = require("../../../database/models");
const { findByEmail } = require("../../services/userService");


const controller = {
    list: async (req, res) => {

        const usersList = await Users.findAll({
            order: [[
                "id", "ASC"
            ]], 
            offset: 0,
            limit: 2
        });
        const users = usersList.map((userr) => { 
            return { 
                id: userr.id,
                name: userr.fullName,
                email: userr.email,
                url: "http://localhost:3000/api/users/" + userr.id
             }
         })

        res.status(200).json({
            count: users.length,
            users
        })
    },

    detail: async (req, res) => {
         const user = await Users.findByPk(req.params.id)

         if (user) {
            res.json({
             data: {
                 id: user.id,
                 fullName: user.fullName,
                 username: user.username,
                 email: user.email,
                 birthdate: user.birthdate,
                 adress: user.adress,
                 image: "http://localhost:3000/public/images/users/" + user.image
             },
             meta: {
                 status: 200,
                 url: "http://localhost:3000/api/users/" + user.id
             }
         }) 

         } else {
             res.json({
                 Problema: "No se encontro el usuario",
                 meta : {
                     status: 404
                 }
             })
         }




         

    }
}

module.exports = controller