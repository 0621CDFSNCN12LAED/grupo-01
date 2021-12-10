function adminMiddleware(req, res, next) {
    if (req.session.userLogged.rolesId == 1) {
        return res.redirect('/products')
    }
    next()
}

module.exports = adminMiddleware