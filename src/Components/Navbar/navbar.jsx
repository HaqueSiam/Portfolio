import React from 'react'
import './navbar.css'
import logo from '../../assets/siam_logo.png'; // Adjust the path as necessary
const Navbar = () => {
  return (
    <div className= "navbar">
        {/*<img src={logo} alt="Logo"/>*/}
        {<ul className="name-logo">
            <li>Haque Siam</li>
        </ul>}
        <ul className="nav-menu">
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
    );
}
export default Navbar;