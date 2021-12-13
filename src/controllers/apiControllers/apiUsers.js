const db = require("../../../database/models")


const controller = {
    list: async (req, res) => {
        const users = await db.Users.findAll();
        res.status(200).json({
            total: users.length,
            data: users,
            status: 200
        })
    },

    detail: async (req, res) => {
         const user = await db.Users.findByPk(req.params.id)
         res.status(200).json({
             data: user,
             status: 200
         })

    }
}

module.exports = controller