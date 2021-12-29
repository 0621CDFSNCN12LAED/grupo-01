import Square from './Square';
import React, { Component } from "react";
import './Home.css';

const productsURL = "/api/products";
const usersURL = "/api/users";


class ContentRowProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        if (!this.state.totalProducts || !this.state.totalCategories || !this.state.totalUsers) {
            return <div>Cargando</div>;
        }
        return (
            <div className="row">
                <Square
                    title="Productos en la Base de Datos"
                    icon="fa-shopping-cart"
                    color="primary"
                    value={this.state.totalProducts}
                />
                <Square
                    title="Categorias en la Base de Datos"
                    icon="fa-tags"
                    color="success"
                    value={this.state.totalCategories}
                />
                <Square
                    title="Usuarios en la Base de Datos"
                    icon="fa-user"
                    color="warning"
                    value={this.state.totalUsers}
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
        const productsJson = await productsNotJson.json();
        const totalProducts = productsJson.meta.count
        const totalCategories = productsJson.meta.categoriesCount

        const usersNotJson = await fetch(usersURL);
        const usersJson = await usersNotJson.json();
        const totalUsers = usersJson.meta.count



        this.setState({ totalProducts: totalProducts, totalCategories: totalCategories, totalUsers: totalUsers });

    }
}

export default ContentRowProduct;













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