import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import logo from '../Images/mernLogo.png';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('jwttoken');
    navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      {/* data-bs-theme="dark" */}
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src={logo} alt="Logo"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto me-3 mb-1 mb-lg-0">
        {/* <RenderNavs /> */}
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">AboutMe</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contactme">Contact</Link>
        </li>
        {!localStorage.getItem('jwttoken') ? ( <>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
          </li> </>) : ( <li className="nav-item">
          <Link className="nav-link" onClick={handleLogout}> Logout </Link>
          </li>  )}
         
        </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
