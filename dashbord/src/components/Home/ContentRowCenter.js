import React from 'react';
import BranchList from './BranchList';
import ProductSale from './ProductSale';
import ImagenProducto from "../../assets/images/mandalorian.jpg"
import './Home.css';
function ContentRowCenter() {
  let textDescription = "La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha."
  return (
    <div className="row">
      <ProductSale img={ImagenProducto} description={textDescription} />
      <BranchList/>
    </div>
  );
}

export default ContentRowCenter;