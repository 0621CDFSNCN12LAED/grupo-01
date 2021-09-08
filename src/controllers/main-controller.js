module.exports = {
  home: (req, res) => {
    res.render("home", { title: "Home" });
  },
  buscar: (req, res) => {
    res.render("buscar", { title: "Buscador" });
  },
  carrito: (req, res) => {
    res.render("carrito", { title: "Carrito de Compras" });
  },
  recuperar: (req, res) => {
    res.render("recuperar", { title: "Recuperar" });
  },
  login: (req, res) => {
    res.render("tutuni-login", { title: "Login" });
  },
  register: (req, res) => {
    res.render("tutuni-register", { title: "Register" });
  },
  productDetail: (req, res) => {
    res.render("product-detail");
  },
  
};
