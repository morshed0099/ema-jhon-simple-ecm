import React from 'react';
import './Cart.css'
// props and cart same 
const Cart = ({carts}) => {
    
    let total=0;
    let totalShipping=0;
    for(const cart of carts){
        console.log(cart)
        total= total +cart.price
        totalShipping= totalShipping +cart.shipping
    }
    const tax =parseFloat((total * 0.1).toFixed(2)) 
          
       
     const grandTotal = total + totalShipping + tax
    return (        
        <div className='order-cart'>
            <h3>Order Summary</h3>     
           <p>cart select:{carts.length}</p>                   
           <p>Total Price: ${total}</p>                   
           <p>Total Shipping Charge: ${totalShipping}</p>                   
           <p>Tax: ${tax}</p> 
           <h4>Grand Total: ${grandTotal}</h4>                  
        </div>
    );
};

export default Cart;