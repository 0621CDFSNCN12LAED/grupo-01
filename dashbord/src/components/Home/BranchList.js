import React, { Component } from 'react';
import './Home.css';

// const productsURL = "http://localhost:3001/api/products";
const productsURL = "/api/products";



export default class BranchList extends Component {

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        if (!this.state.categories){
            return <div>
                nada :(
            </div>
        }
  
  return (
    <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
                Categorias con las que trabajamos
            </h5>
            </div>
            <div className="car-bdody">
                <div className="row">

                    
                {this.state.categories.map((category) =>
                    <div className="col-lg-6 mb-4">
                        <div className="card bg-dark text-white shadow">
                            <div className="card-body">{category.name} <br></br> Cantidad de productos : {category.total}</div>
                            {/* <div className="card-body">Cantidad de productos : {category.total}</div> */}
                        </div>
                    </div>
                )}
                
                </div>
            </div>
        </div>
    </div>
  );
}

    componentDidMount() {
        console.log("CD-Mount");
        this.fetchCategories();
    }

    async fetchCategories() {
        const result = await fetch(productsURL);
        const response = await result.json()
        const categories = response.meta.countByCategory
        
        this.setState({ categories:categories })
        console.log(categories)
    }
}




// import React from 'react';
// import './Home.css';

// export default function BranchList() {

//   let categorias = ["Remeras", "Pantalon", "Abrigo", "Calzado", "Moda Intima", "Accesorios"]
  
//   return (
//     <div className="col-lg-6 mb-4">
//         <div className="card shadow mb-4">
//             <div className="card-header py-3">
//             <h5 className="m-0 font-weight-bold text-gray-800">
//                 Categorias con las que trabajamos
//             </h5>
//             </div>
//             <div className="car-bdody">
//                 <div className="row">
//                 {categorias.map((categoria, i) =>
//                     <div className="col-lg-6 mb-4" key={i}>
//                         <div className="card bg-dark text-white shadow" key={i}>
//                             <div className="card-body" key={i}>{categoria}</div>
//                         </div>
//                     </div>
//                 )}
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }








