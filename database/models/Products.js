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
        name: DataTypes.STRING,
        image: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        discount: DataTypes.TINYINT,
        size: DataTypes.STRING,
        description: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        deleted: DataTypes.TINYINT,
    }

    const Product = sequelize.define("Products", cols,
        {
        tableName: "products",
        timestamps: false,
        }
    );

    Product.associate = function (models) {

        Product.belongsTo(models.Categories, {
          as: "category",
          foreignKey: "categoryId",
        });

        Product.belongsToMany(models.Carts, {
            as: "carts", //lo que voy a usar para llamar en el controlador include:[{association:"carts"}]
            through: "cart_product",
            foreignKey: "productId",
            otherKey: "cartId",
            timestamps: false
        })

        Product.belongsToMany(models.Users, {
            as: "users", 
            through: "product_user_fav",
            foreignKey: "productId",
            otherKey: "userId",
            timestamps: false
        })

    };

    return Product;
};
