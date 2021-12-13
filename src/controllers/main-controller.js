module.exports = {
  home: (req, res) => {
    res.render("home", { title: "Home" , user: req.session.userLogged });
  },
  buscar: (req, res) => {
    res.render("buscar", { title: "Buscador", user: req.session.userLogged });
  },
  carrito: (req, res) => {
    res.render("carrito", { title: "Carrito de Compras", user: req.session.userLogged });
  },
  recuperar: (req, res) => {
    res.render("recuperar", { title: "Recuperar", user: req.session.userLogged });
  },
  login: (req, res) => {
    res.render("tutuni-login", { title: "Login" , user: req.session.userLogged});
  },
  register: (req, res) => {
    res.render("tutuni-register", { title: "Register", user: req.session.userLogged });
  },
  //productDetail: (req, res) => {
  //  res.render("product-detail");
  //},
  
};
