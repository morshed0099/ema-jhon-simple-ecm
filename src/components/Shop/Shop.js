import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getDataFromLocalStr } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const products = useLoaderData()
    console.log(products)
    // const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([])
    // useEffect(() => {
    //     fetch('products.json')
    //         .then(res => res.json())
    //         .then(data => setProducts(data)) 
    // }, [])
  

    useEffect(()=>{
        const loadData =getDataFromLocalStr()   
        let saveData=[] 
        for(const id in loadData){
           // console.log(id)
           const match =products.find(product=>product.id===id)
           if(match){
            const quantity=loadData[id]
            match.quantity=quantity
            saveData.push(match)
           }
       }
       setCarts(saveData)
    },[products])
      let newCart=[]
    const handelerAddToCart = (cartProduct) => { 
        const exist = products.find(product=>product.id===cartProduct.id)
    //    console.log(exist.quantity =exist.quantity+1)
        if(exist){
            exist.quantity=exist.quantity+1 
            const rest=carts.filter(cart=>cart.id!==exist.id)
            newCart=[...rest,exist]
        }          
        else{
            exist.qunatity=1
            newCart=[...carts,cartProduct]
        }
    
         console.log(newCart)
        setCarts(newCart)
        addToDb(cartProduct.id)
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