import React from 'react';
import BranchList from './BranchList';
import ProductSale from './ProductSale';
import ImagenProducto from "../../assets/images/mandalorian.jpg"
import './Home.css';
function ContentRowCenter() {
  return (
    <div className="row">
      <ProductSale img={ImagenProducto} />
      <BranchList/>
    </div>
  );
}

export default ContentRowCenter;