import React from 'react';
import './Store.css';
import {PRODUCTS} from './Datashoes';




const Store = () => {
  return (

    <div className='container-store'>
            {PRODUCTS.map((product, index) => {
                return (

                <div key={index} className='store'>
                    
                    <div className='img'> 
                    <img src={product.img} alt=''/>
                    </div>
  
                    <h3> {product.name} </h3>
                    <h5> $ {product.price} </h5>
                    <button>Add to Cart</button>

                </div>

                );
            })}

    </div>
  )
}

export default Store
