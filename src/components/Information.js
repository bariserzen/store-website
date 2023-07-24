import React from "react";
import './Information.css';
import {VscWorkspaceTrusted} from 'react-icons/vsc';
import {MdLocalShipping} from 'react-icons/md';
import {FaExchangeAlt} from 'react-icons/fa';



const Information = () => {
    return (
        <div className="container-information">
            <div className="information">
                <VscWorkspaceTrusted size={30}/>
                <h3>FEEL SAFE</h3>
                <h4>Safe shopping with 256 Bit SSL</h4>
            </div>

            <div className="information">
                <MdLocalShipping size={30}/>
                <h3>DON'T THINK ABOUT SHIPPING</h3>
                <h4>Free shipping on orders over $ 200</h4>
            </div>

            <div className="information">
                <FaExchangeAlt size={30}/>
                <h3>RETURN ON PRODUCTS</h3>
                <h4>Return guarantee in 30 days</h4>
            </div>
        </div>
    );
}


export default Information;