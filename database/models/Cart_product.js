const { DataTypes } = require("Sequelize");
module.exports = (sequelize) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        priceUnit: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        productId: DataTypes.INTEGER,
        cartId: DataTypes.INTEGER,
    }

    const Cart_product = sequelize.define("Cart_product", cols,
        {
        tableName: "cart_product",
        timestamps: false,
        }
    );

    Cart_product.associate = function (models) {

        Cart_product.belongsTo(models.Carts, { 
            as: "products",
            foreignKey: "cartId"
        })

        Cart_product.belongsTo(models.Products, { 
            as: "carts",
            foreignKey: "productId"
        })
    };

    return Cart_product;
};