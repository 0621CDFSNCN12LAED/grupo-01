module.exports = {
  home: (req, res) => {
    res.render("home");
  },
  buscar: (req, res) => {
    res.render("buscar");
  },
  carrito: (req, res) => {
    res.render("carrito");
  },
  recuperar: (req, res) => {
    res.render("recuperar");
  },
  login: (req, res) => {
    res.render("tutuni-login");
  },
  register: (req, res) => {
    res.render("tutuni-register");
  },
};
