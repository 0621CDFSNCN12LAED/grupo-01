const db = require("../../database/models/index");
const Users = require("../../database/models/Users");
const userService = require("../services/userService");



  async function loggedMiddleware(req, res, next) {
    res.locals.isLogged = false;
if (req.cookies.userEmail) {
    const storedEmail = req.cookies.userEmail
    const userFromCookie = await userService.findByEmail(storedEmail)

    if (userFromCookie) {
        req.session.userLogged = userFromCookie
    }
}
    if (req.session && req.session.userLogged) {
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    

    next();
}

module.exports = loggedMiddleware