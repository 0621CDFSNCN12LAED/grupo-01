const fs = require("fs");
const bcryptjs = require("bcryptjs");
const path = require("path");
const db = require("../../database/models");
// const { all } = require("sequelize/types/lib/operators");

const usersPath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));


const userService = {
    writeJson() {
        const jsonString = JSON.stringify(users, null, 4);
        fs.writeFileSync(usersPath, jsonString);
      },

    findAll(){
        const allUsers = users.filter ((user) => {
            return !user.deleted;
        });
        return allUsers;
    },

    findById(id) {
        const oneUser = users.find((user) => {
            return user.id == id;
        });
        return oneUser;
    },

    create(reqbody, avatar) {
        const lastUser = users[users.length - 1];
        const biggestUserId = users.length > 0 ? lastUser.id : 1;
        const newUser = {
          ...reqbody,
          id: biggestUserId + 1,
          admin: 0,
          password: bcryptjs.hashSync(reqbody.password, 10),
          confirmPassword: bcryptjs.hashSync(reqbody.password, 10),
          avatar: avatar ? avatar.filename: "agregar-imagen-default-de-avatar"
        };
        users.push(newUser);
        this.writeJson();
    },

    deleteUser(id){
        const user = this.findById(id);
        user.deleted = true;
        this.writeJson();
    },

     findByEmail(text) { 
        
        const usersFound =  db.Users.findOne({
            where : { email : text }
        })
        return usersFound
    },

    async findByPassword(text) { 
        
        const usersFoundPass = await db.Users.findOne({
            where : { password : text }
        })
        return usersFoundPass
    }

}


module.exports = userService;