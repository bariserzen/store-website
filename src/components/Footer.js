import React from "react";
import './Footer.css';
import Logo1 from '../img/logo1.jpg';
import {BsYoutube,BsTwitter} from 'react-icons/bs';
import {FaTiktok} from 'react-icons/fa';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoFacebook} from 'react-icons/bi';



const Footer = () => {
    return(
        <div className="container-footer">


            <div className="footer">
            <table>
             <tr>
                <th>Categories</th>
                <th>Help</th>
                <th>About</th>
             </tr>
             <tr>
                <td>Nike Air Force</td>
                <td>Communication</td>
                <td>Shops</td>
             </tr>
             <tr>
                <td>Nike Blazer </td>
                <td>Order Tracking</td>
                <td>Career</td>
             </tr>
             <tr>
                <td>Air Jordan</td>
                <td>FAQ</td>
                <td>Blog</td>
             </tr>
             </table>
            </div>

            <div className="brand">
                  <div className="logo">
                     <img src={Logo1} alt="" />
                  </div>
                <div className="social">
                  <BiLogoFacebook size={30}/>
                  <AiOutlineInstagram size={30}/>
                  <BsYoutube size={30}/>
                  <BsTwitter size={30}/>
                  <FaTiktok size={30}/>
                </div>
            </div>

        </div>


    );
};


export default Footer;