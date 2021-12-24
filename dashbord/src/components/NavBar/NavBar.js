import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Usuario from "../../assets/images/sin-foto-de-perfil.png";

function NavBar() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top navBarBlue">
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <i className="fa fa-bars"></i>
        </button>

        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown no-arrow mx-1">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="alertsDropdown"
            >
              <i className="fas fa-bell fa-fw"></i>
              <span className="badge badge-danger badge-counter">3+</span>
            </Link>
          </li>

          <li className="nav-item dropdown no-arrow mx-1">
            <Link
              className="nav-link dropdown-toggle"
              to="/"
              id="messagesDropdown"
            >
              <i className="fas fa-envelope fa-fw"></i>
              <span className="badge badge-danger badge-counter">7</span>
            </Link>
          </li>

          <div className="topbar-divider d-none d-sm-block"></div>
          <li className="nav-item dropdown no-arrow">
            <Link className="nav-link dropdown-toggle" to="/" id="userDropdown">
              <Link to="/Login"><span className="mr-2 d-none d-lg-inline  small l-white">Login</span>
              </Link><span className="mr-2 d-none d-lg-inline small">|</span>
              <Link to="/Register"><span className="mr-2 d-none d-lg-inline  small l-white">Registrarse</span></Link>
              <img className="img-profile rounded-circle whiteBorder" src={Usuario} alt="" width="50"/>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;

