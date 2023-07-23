import React, { useState } from "react";
import Logo from '../img/logo.png';
import './Navbar.css';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



const Navbar = () => {

   const [click, setClick] = useState(false);
  
   const clickHandler = () => {
    setClick(!click);
  }

    return (

        <div className="container1">
        <div className="navbar">

            <div className="logo">
                <img src={Logo} alt="" />
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li> Home </li>
                <li> Shoes </li>
                <li> Socks </li>
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