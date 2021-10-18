// Requires
const path = require("path");
const fs = require("fs");

// Combirtiendo el Json a objeto de Js
const productsjson = fs.readFileSync(path.join(__dirname, "../data/productsDataBase.json"));
const products = JSON.parse(productsjson);

const appService = {
    writeJson() {
        const jsonString = JSON.stringify(products, null, 4);
        fs.writeFileSync(productsjson, jsonString);
      },

    findAll(){
        const allProducts = products.filter ((product) => {
            return !product.deleted;
        });
        return allProducts;
    },

    findById(id) {
        const oneProduct = products.find((product) => {
            return product.id == id;
        });
        return oneProduct;
    },

    findByCategory(category){
        return this.findAll().filter((product) => {
            return product.category == category;
        })
    },

    createProduct(reqbody, image){
        const lastProduct = products[products.length - 1];
        const biggestProductId = products.length > 0 ? lastProduct.id : 1;
        const product = {
            ...reqbody,
            image: image ? image.filename : "default-image.png",
            id: biggestProductId + 1,
            stock: Number(reqbody.stock),
            price: Number(reqbody.price),
            discount: Number(reqbody.discount),
            deleted: false,
        }
        products.push(product);
        this.writeJson();
    },

    editOne(id, reqbody, image){
        const product = this.findById(id);
        product.name = reqbody.name;
        product.image = image ? image.filename : product.image;
        product.category = reqbody.category;
        product.stock = Number(reqbody.stock);
        product.talle = reqbody.talle;
        product.price = Number(reqbody.price);
        product.discount = Number(reqbody.discount);
        product.enviogratis = reqbody.enviogratis;
        product.description = reqbody.description;
        this.writeJson();
    },

    deleteProduct(id){
        const product = this.findOneById(id);
        product.deleted = true;
        this.writeJson();
    }
};

//Comentario: Cambie el Delete teniendo en cuenta lo que vimos en la base de datos.
// Ahora tenemos un campo el cual se encarga de ver si el producto esta vigente o fue borrado. 

module.exports = appService;