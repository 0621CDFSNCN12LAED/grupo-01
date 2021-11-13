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
        categoryName: DataTypes.STRING,
    }

    const Category = sequelize.define("Categories", cols,
        {
        tableName: "users",
        timestamps: false,
        }
    );

    return Category;
};