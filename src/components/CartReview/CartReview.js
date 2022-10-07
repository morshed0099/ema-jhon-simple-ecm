import { faTractor, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CartReview.css'

const CartReview = ({cart,cartHandelerDelet}) => {
    const {id,img,price,shipping,quantity}=cart
    return (
        <div className='shoping-cart'>
            <div className='shoping'>
            <img src={img} alt="" />
            </div>
            <div className='info'>
                <div className='details'>
                    <p>price :{price}</p>
                    <p>quantity :{quantity}</p>
                    <p>shipping:{shipping}</p>
                </div>
                <div>
                   <button onClick={()=>cartHandelerDelet(id)} className='btn'>
                    <FontAwesomeIcon className='icon' icon={faTrash}></FontAwesomeIcon>
                  </button>
                </div>
            </div>
        </div>
    );
};

export default CartReview;