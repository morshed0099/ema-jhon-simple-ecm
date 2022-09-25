import React from 'react';
import './Cart.css'
// props and cart same 
const Cart = ({carts}) => {
       
  
    return (
        
        <div>
            {
                carts.map(cart=>{console.log(cart.name)})
            }                    
        </div>
    );
};

export default Cart;