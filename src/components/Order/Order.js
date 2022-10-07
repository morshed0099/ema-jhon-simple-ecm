import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import CartReview from '../CartReview/CartReview';

const Order = () => {
    const {products, priviousProducts }=useLoaderData()
    const [carts,setCart]=useState(priviousProducts);

    const cartHandelerDelet =(id)=>{
            const restProdcts=carts.filter(product=>product.id!==id)
            setCart(restProdcts)
            removeFromDb(id)
    }
    return (
        <div className='shop'>
            <div className="order-container">
                {
                  carts.map(cart=><CartReview 
                    key={cart.id}
                     cart={cart}
                     cartHandelerDelet={cartHandelerDelet}
                  ></CartReview>)
                }
            </div>
            <div className="card-container">                          
                <Cart carts={carts}></Cart>            
            </div>
        </div>
    );
};

export default Order;