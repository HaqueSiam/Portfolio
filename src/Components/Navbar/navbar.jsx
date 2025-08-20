import React, {useState} from 'react'
import './navbar.css'
import logo from '../../assets/siam_logo.png'; // Adjust the path as necessary
import underline from '../../assets/nav_underline.svg'
const Navbar = () => {
    const [menu,setMenu] = useState('home');
  return (
    <div className= "navbar">
        {/*<img src={logo} alt="Logo"/>*/}
        {<ul className="name-logo">
            <li>Haque Siam</li>
        </ul>}
        <ul className="nav-menu">
            <li><p>Home</p>{menu==='home'? <img src={underline} alt=''/> :<></>}</li>
            <li><p>About Me</p>{menu==='about'? <img src={underline} alt=''/> :<></>}</li>
            <li><p>Services</p>{menu==='services'? <img src={underline} alt=''/> :<></>}</li>
            <li><p>Portfolio</p>{menu==='work'? <img src={underline} alt=''/> :<></>}</li>
            <li><p>Contact</p>{menu==='contact'? <img src={underline} alt=''/> :<></>}</li>
        </ul>
        <div className="nav-connect">Connect With Me</div>
    </div>
    );
}
export default Navbar;