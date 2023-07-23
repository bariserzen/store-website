import React from "react";
import './Home.css';
import Main from '../img/main.png';


const Home = () => {
    return (
      <div className='home'>
          <div className='container'>
  
              {/* Left Side */}
              <div className='left'>
                  <p>All the new products you are looking for</p>
                  <h1>Buy the products you want now with Force Steps ...</h1>
                  <p>Create your own style</p>
              </div>
  
              {/* Right Side */}
              <div className='right'>
                  <div className='img-container'>
                      <img src={Main} alt=''/>
                  </div>
              </div>
              
          </div>
      </div>
    )
  }
  
  export default Home