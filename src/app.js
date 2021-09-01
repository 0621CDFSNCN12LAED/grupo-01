const express = require("express");
const path = require("path");
const app = express();

const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

app.listen(3000, () => console.log("Servidor esta corriendo"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

const indexRouter = require("./routes/index");

app.use("/", indexRouter);
app.use(express.static(path.join(__dirname, "../public")));

module.export = app;

// ACA CARGO LA PAGINA DEL BUSCADOR
// app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "/views/home.html"));
//});
