import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// import './assets/css/app.css';
import SideBar from './components/sideBar/sideBar';
// import ContentWrapper from './components/contentWrapper/contentWrapper';

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

function App() {
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar />
        {/* <ContentWrapper /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default App;
