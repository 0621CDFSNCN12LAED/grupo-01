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
