const { DataTypes } = require("Sequelize");
const Users = require("./Users");

// Si agregamos o borramos columnas de la base de datos, recien
// ahí es cuando tenemos que venir aca a modificar algo.

module.exports = (sequelize) => {

    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: DataTypes.INTEGER,
        productId: DataTypes.INTEGER
    }

    const Product_user_fav = sequelize.define("Product_user_fav", cols,
        {
        tableName: "product_user_fav",
        timestamps: false,
        }
    );

    Product_user_fav.associate = function (models) {

        Product_user_fav.belongsTo(models.Users, { 
            as: "products",
            foreignKey: "userId"
        })

        Product_user_fav.belongsTo(models.Products, { 
            as: "users",
            foreignKey: "productId"
        })

        // Product_user_fav.belongsToMany(models.Product, { 
        //     as: "users",
        //     foreignKey: "productId"
        // })

       


        // as: "products",
        //   foreignKey: "categoryId",

    };

    return Product_user_fav;
};
