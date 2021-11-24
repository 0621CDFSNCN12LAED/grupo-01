const { DataTypes } = require("Sequelize");

// Si agregamos o borramos columnas de la base de datos, recien
// ahí es cuando tenemos que venir aca a modificar algo.

module.exports = (sequelize) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        status: DataTypes.STRING,
    }

    const Cart = sequelize.define("Carts", cols,
        {
        tableName: "users",
        timestamps: false,
        }
    );

    Cart.associate = function (models){
        Cart.belongsToMany(models.Products, {
            as: "products", //lo que voy a usar para llamar en el controlador include:[{association:"products"}]
            through: "cart_product",
            foreignKey: "cartId",
            otherKey: "productId",
            timestamps: false
        })
    }

    Cart.hasOne(models.Users, {
        as: "user",
        foreignKey: "userId",
    });
    
    return Cart;
};