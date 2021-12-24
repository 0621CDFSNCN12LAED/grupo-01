import React from "react"
import logoTutuni from "../../assets/images/logo-tutuni-blanco.png"

import { Link } from 'react-router-dom';

function SideBar() {
    return ( 
		<React.Fragment>
			<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

				<Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
					<div className="sidebar-brand-icon">
						<img className="w-100" src= {logoTutuni} alt="Tutuni" />
					</div>
				</Link>


				<hr className="sidebar-divider my-0" />


			    <li className="nav-item active ">
					<Link to="/" className="nav-link">
						<i className="fas fa-home"></i>
						<span>- Tutuni -</span>
					</Link>
				</li>	

				<hr className="sidebar-divider" />

				<div className="sidebar-heading">Actions</div>

 				{/*<!-- Side Bar items -->*/}

				<li className="nav-item">
					<Link className="nav-link collapsed" to="/Products">
						<i className="fas fa-fw fa-folder"></i>
						<span>Products</span>
					</Link>
				</li>

				<li className="nav-item">
					<Link className="nav-link" to="/Users">
						<i className="fas fa-fw fa-chart-area"></i>
						<span>Users</span>
					</Link>
				</li>


				{/* <li class="nav-item">
					<a class="nav-link" href="/">
						<i class="fas fa-fw fa-table"></i>
						<span>Tables</span></a>
				</li> */}


				<hr className="sidebar-divider d-none d-md-block" />
			</ul>
		</React.Fragment>
	);
}

export default SideBar;