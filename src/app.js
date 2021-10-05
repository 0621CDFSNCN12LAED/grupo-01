


const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

const metohdOverride = require("method-override");

app.listen(3000, () => console.log("Servidor esta corriendo"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const indexRouter = require("./routes/index");
const productsRouter = require('./routes/products'); 

app.use(metohdOverride("_method"));
app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "../public")));
app.use("/products",productsRouter)

module.export = app;

// ACA CARGO LA PAGINA DEL BUSCADOR
// app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "/views/home.html"));
//});
