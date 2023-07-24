import React, { useState } from "react";
import Logo from '../img/logo.png';
import './Navbar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { Link } from "react-router-dom";



const Navbar = () => {

   const [click, setClick] = useState(false);
  
   const clickHandler = () => {
    setClick(!click);
  }

  const CloseMenu = () => {
    setClick(false);
  }

    return (

        <div className="container1">
        <div className="navbar">

            <div className="logo">
                <Link to='/'><img src={Logo} alt="" /></Link>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'} onClick={CloseMenu}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/shoes'>Shoes</Link></li>
                <li> <Link to='/socks'>Socks</Link></li>
                <li> Sign up </li>
            </ul>

            <div className="ham-menu" onClick={clickHandler}>
                { click ? <AiOutlineClose size={30} style={{color:"white"}}/> 
                        : <AiOutlineMenu size={30} style={{color:"white"}}/>}
                
            </div>

        </div>
        </div>
    )
}


export default Navbar;