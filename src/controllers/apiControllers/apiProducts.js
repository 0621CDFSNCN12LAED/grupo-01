const db = require("../../../database/models")


const controller = {
    list: async (req, res) => {
        const productsList = await db.Products.findAll({include: ["category"]});
        const category = await db.Categories.findAll({include: ["products"]});
        const products = productsList.map((product) => { 
            return { 
                id: product.id,
                name: product.name,
                description: product.description,
                category: product.category,
                detail: "http://localhost:3000/api/products/" + product.id
            }
        
             })
        const countByCategory = category.map((cat) => { 
            return { 
                id: cat.id,
                name: cat.categoryName,
                total: cat.products.length
            }
         })
        res.json({
            count: products.length,
            countByCategory, 
            products
        })
    },

    detail: async (req, res) => {
         const detail = await db.Products.findByPk(req.params.id, {include: ["category"]})

         if (detail) {
             res.json({
             detail,
             category: detail.category,
             imageUrl: "http://localhost:3000/public/images/products/" + detail.image,
             status: 200
         })
         } else {
            res.json({
                Problema: "No se encontro el producto",
                meta : {
                    status: 404
                }
            })
        }
         

    }
}

module.exports = controller