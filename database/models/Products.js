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
        tableName: "users",
        timestamps: false,
        }
    );

    return Product;
};
