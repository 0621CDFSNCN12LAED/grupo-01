import React, { Component } from "react";
import './Home.css';

const productsURL = "/api/products";

// Last Product
class ProductSale extends Component {

    constructor(props) {
        super(props);
        this.state = {};
      }

    render() {
    if (!this.state.lastProduct) {
        return <div>Cargando</div>;
    }
    return(
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Último Producto</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <h2>{this.state.lastProduct.name}</h2>
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 imageProductHome" src={`http://localhost:3001/images/productos/${this.state.lastProduct.image}`} alt="ImageProduct"/>
                </div>
                <p>{this.state.lastProduct.description}</p>
                <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">Ver detalle producto</a>
            </div>
        </div>
    </div>
    )
}

    componentDidMount() {
        console.log("CD-Mount");
        this.LastProduct();
    }
    async LastProduct() {
        const result = await fetch(productsURL);
        const response = await result.json();
        const product = response.data.products;
        // console.log(product)
        
        const lastProductId = product.length-1;
        const lastProduct = product[lastProductId];
        // console.log(lastProduct)

        this.setState({ lastProduct: lastProduct });
    }
}
export default ProductSale;