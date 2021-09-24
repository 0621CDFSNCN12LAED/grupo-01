const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../public/images/productos"),
  filename: (req, res, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

//1. /products (GET)Listado de productos
router.get("/", productsController.index);

//2. /products/create (GET) Formulario de creación de productos
router.get("/create", productsController.create); //Showform

// 4. /products(POST) - Acción de creación(a donde se envía el formulario)
router.post("/", upload.single("image"), productsController.store); //crearProducto

//3. /products/:id (GET) Mostrar Detalle de un producto particular
router.get("/:id", productsController.detail);

//5. /products/:id/edit (GET) Mostrar Formulario de edición de productos
router.get("/:id/edit", productsController.edit);

// 6. /products/:id (PUT) Editar Producto
router.put("/:id", productsController.update);

//Eliminar producto
router.delete("/:id", productsController.destroy);

module.exports = router;
