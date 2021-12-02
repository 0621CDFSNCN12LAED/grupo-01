// Todos los require 
const express = require("express");
const session = require('express-session');
const cookies = require('cookie-parser');
const methodOverride = require("method-override");
const path = require("path");

const app = express();
app.use(session({
    secret: "Mensaje Secreto",
    resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

// Middleware que se muestra cuando un usuario esta logueado, usar si hace falta para vistas
const loggedMiddleware = require('./middlewares/loggedMiddleware');
app.use(loggedMiddleware)


app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false}))

// Para poder ver las vistas
const publicPath = path.resolve(__dirname, "../public");
app.use(express.static(publicPath));

// Implementando EJS 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Rutas
const indexRouter = require("./routes/index");
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/usersRoutes')

app.use("/", indexRouter);
app.use("/products",productsRouter);
app.use("/users", usersRouter);

// Cargando el servidor
app.listen(3000, () => console.log("Servidor esta corriendo"));



module.export = app;    // nose que es esto.



// --- Cosas comentadas --- //

// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// ACA CARGO LA PAGINA DEL BUSCADOR
// app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "/views/home.html"));
//});


// Forma de llamar a vistas en public mas corta sin variable
// app.use(express.static(path.join(__dirname, "../public")));
