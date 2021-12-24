import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import ContentProducts from "./ContentProducts.js";
import "./Products.css";

function Products() {
  return (
    <React.Fragment>
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <NavBar />
          <ContentProducts />
          <Footer />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Products;