import React from "react";
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar=()=>{
return(


    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/"><img src="../Images/logo.png"></img> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      <li className="nav-item">
        <Link className="nav-link"  to="/quickpackages"> Quickpackages</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/prepaid">Prepaid</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link"  to="/postpaid">Postpaid</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link"  to="/card">All Packages</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link"  to="/login">Login</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link"  to="/signup">Signup</Link>
        </li>
       
 
      </ul>
      
    </div>
  </div>
</nav>
    </>
)


}

export default Navbar;