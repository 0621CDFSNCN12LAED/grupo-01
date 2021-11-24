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
        roleName: DataTypes.STRING,
    }

    const Role = sequelize.define("Roles", cols,
        {
        tableName: "roles",
        timestamps: false,
        }
    );

    Role.associate = function (models) {
        Role.hasMany(models.Users, {
          as: "user",
          foreignKey: "rolesId",
        });
    };

    return Role;
};