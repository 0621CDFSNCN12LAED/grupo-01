import React, { Component } from "react";
import "./Products.css";
const productsURL = "/api/products";

export default class ContentProducts extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        if (!this.state.products){
            return <div>
                no carga :(
            </div>
        }

        return (
            <div className="car-bdody">
                <div className="row">

                    {/* perdon por los br jajaja */}
                {this.state.products.map((product) =>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">{product.name}
                            <br></br> Descripcion: {product.description}
                            <br></br> Categoria: {product.category.categoryName}
                            <br></br> <img src={`http://localhost:3001/images/productos/${product.image}`} alt="ImageProduct" width="200px" height="200px"/>
                            </div>
                        </div>
                    </div>
                )}
                
                
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetch();
    }

    async fetch() {
    const result = await fetch(productsURL);
    const response = await result.json()
    const products = response.data.products

    this.setState({ products:products })
    console.log(products[0])
    }
}