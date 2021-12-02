function authMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.render('tutuni-login')
    }
    next()
}

module.exports = authMiddleware