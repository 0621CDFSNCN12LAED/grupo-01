const db = require("../../../database/models")


const controller = {
    list: async (req, res) => {
        const products = await db.Products.findAll();
        res.status(200).json({
            total: products.length,
            data: products,
            status: 200
        })
    },

    detail: async (req, res) => {
         const product = await db.Products.findByPk(req.params.id)
         res.status(200).json({
             data: product,
             status: 200
         })

    }
}

module.exports = controller