import React from 'react';
import './Tshirt.css';
import { PRODUCTS1} from './Datatshirt';




const Tshirt = () => {
  return (

    <div className='container-tshirt'>
            {PRODUCTS1.map((product, index) => {
                return (

                <div key={index} className='tshirt'>
                    
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

export default Tshirt