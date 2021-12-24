import Square from './Square';
import React, { Component } from "react";
import './Home.css';

const productsURL = "http://localhost:3001/api/products";
const usersURL = "http://localhost:3001/api/users";

const count = [];

class ContentRowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        if (!this.state.count) {
            return <div>Cargando</div>;
        }
        return (
            <div className="row">
                <Square
                    title="Productos en la Base de Datos"
                    icon="fa-shopping-cart"
                    color="primary"
                    value={this.state.count[0]}
                />
                <Square
                    title="Categorias en la Base de Datos"
                    icon="fa-tags"
                    color="success"
                    value={6}
                />
                <Square
                    title="Usuarios en la Base de Datos"
                    icon="fa-user"
                    color="warning"
                    value={this.state.count[1]}
                />
            </div>
        );
    }
    componentDidMount() {
        console.log("el componente se monto");
        this.fetchAll();
    }
    async fetchAll() {
        const productsNotJson = await fetch(productsURL);
        const products = await productsNotJson.json();
        // console.log(products)
        count.push(products.meta.count);
        
        
        const usersNotJson = await fetch(usersURL);
        const users = await usersNotJson.json();
        count.push(users.meta.count);
   
        this.setState({ count: count });
    }
}

export default ContentRowProduct;

// ERROR: encabezado CORS ‘Access-Control-Allow-Origin’ faltante). Código de estado: 200.












// let totalProducts = {
//     title: 'Total de Productos',
//     color: 'primary', 
//     cuantity: 5,
//     icon: 'fas fa-tshirt'
// }

// let totalLocations = {
//     title:' Total de Sucursales', 
//     color:'success', 
//     cuantity: '9',
//     icon:'fas fa-building'
// }

// let productsInOffer = {
//     title:'Productos en Oferta' ,
//     color:'warning',
//     cuantity:'12',
//     icon:'fas fa-tag'
// }

// let cartProps = [totalProducts, totalLocations, productsInOffer];

// function ContentRowProduct() {
//   return (
//     <div className="row">  
//             {cartProps.map( (movie, i) => {
//                 return <Square {...movie} key={i}/>
//             })}

//         </div>
//   );
// }

// export default ContentRowProduct;