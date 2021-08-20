const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("Servidor esta corriendo"));

// ACA CARGO LA PAGINA DEL BUSCADOR
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/buscar.html"));
});

app.get("/carrito", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/carrito.html"));
});

app.get("/IniciarSesion-Tutuni", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/tutuni-login.html"));
})

app.get("/Registrarse-Tutuni", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/tutuni-register.html"));
})

app.get("/Recuperar", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/recuperar.html"));
})

