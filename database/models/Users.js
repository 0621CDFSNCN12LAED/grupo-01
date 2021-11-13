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
        fullName: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        birthdate: DataTypes.DATE,
        password: DataTypes.STRING,
        deleted: DataTypes.TINYINT,
    }

    const User = sequelize.define("Users", cols,
        {
        tableName: "users",
        timestamps: false,
        }
    );

    return User;
};
