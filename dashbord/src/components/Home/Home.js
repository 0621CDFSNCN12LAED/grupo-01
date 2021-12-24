import React from 'react';
import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar.js';
import ContentRowCenter from './ContentRowCenter.js';
import ContentRowProduct from './ContentRowProduct';
import './Home.css';

function Home() {
  return (
    <React.Fragment>
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <NavBar/>
                <div className="container-fluid">
                    <div className="d-sm-flex aligns-items-center justify-content-between mb-4"></div>
                    <ContentRowProduct/>
                    <ContentRowCenter/>
                </div>
                <Footer />
            </div>
        </div>    
    </React.Fragment>
  );
}

export default Home;