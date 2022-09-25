import React, { useEffect } from 'react';
import { useState } from 'react';
import { addToDb } from '../../utilities/fakedb';
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
        addToDb(product.id)
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
                  <Cart carts={carts}></Cart>              
            </div>
        </div>
    );
};

export default Shop;