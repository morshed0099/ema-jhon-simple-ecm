import React, { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {


    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handelerAddToCart = (product) => {    
        const newCart = [...carts, product]
        setCarts(newCart)
    }   

    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product}
                        key={product.id}
                        handelerAddToCart={handelerAddToCart}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <h3>Order Summary</h3>
                <p>Select cart:{carts.length}</p>
                  <Cart carts={carts}></Cart>              
            </div>
        </div>
    );
};

export default Shop;