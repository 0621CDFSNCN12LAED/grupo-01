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
}