const db = require("../../database/models/index");


const controller = {
    list: async (req, res) => {
        const user = await db.Users.findByPk(req.session.userLogged.id)
        const e = await db.Carts.findOne({where: {userId: user.id}})
  
        // const cart = await db.Carts.findByPk(e.id,{ include: ["products"]} )
        
        // const cart = await db.Carts.findAll({ include: ["products"]}, {where : {userId : req.session.userLogged.id}})

        if (e) {
        const cart = await db.Carts.findByPk(e.id,{ include: ["products"]} )
        const suma = [0]
        console.log(cart.userId)
        res.render("carrito", { cart, suma })

} else {
    res.send("NO TENES CARRITO")
}
    },
    add: async (req, res) => {
        console.log("estas aca")
        const cartsUser = await db.Carts.findAll({where : {userId: req.session.userLogged.id, status: "in-p"}})
        const biggestId = await db.Cart_product.max("id")
        console.log(cartsUser)

        if (!cartsUser[0]) {
            await db.Carts.create({
                id: biggestId + 1,
                status: "in-p",
                userId: req.session.userLogged.id
            }) 
            console.log

            const selectedProduct = await db.Products.findByPk(req.params.id)
            const cartsUser = await db.Carts.findAll({where : {userId: req.session.userLogged.id, status: "in-p"}})
            
            

            await db.Cart_product.create({
                id: biggestId + 1,
                priceUnit: selectedProduct.price,
                quantity: 1,
                productId: selectedProduct.id,
                cartId: cartsUser[0].id


            })
        } if (cartsUser[0]) {
            const selectedProduct = await db.Products.findByPk(req.params.id)
            const cartsUser = await db.Carts.findAll({where : {userId: req.session.userLogged.id, status: "in-p"}})
            console.log("llego hasta aca")

            await db.Cart_product.create({
                id: biggestId + 1,
                priceUnit: selectedProduct.price,
                quantity: 1,
                productId: selectedProduct.id,
                cartId: cartsUser[0].id


            })

    } else {
        res.send("problemas")
    }
    res.redirect("/products")
    }

}

module.exports = controller