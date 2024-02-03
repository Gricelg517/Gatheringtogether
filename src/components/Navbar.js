import React, {useState} from 'react'
import { Link } from 'react-router-dom'
//Import in bootstrap components
import '../Styles/Navbar.css'

//Import all assets
import logo from"../assets/logo2.jpg";

function Navbar() {
  return (
    <div className="navbar">
        <div className="left side">
            <image src={logo} />
        </div>
        <div className="right side">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Contact</Link>
            <Link to="/">Login</Link>
            
      </div>
    </div>
    
  );
}

export default Navbar;
