import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'

const Product = (props) => {
    const {name,img,price,seller}=props.product

    return (
        <div className='product-cart'>
            <img src={img} alt=''></img>
            <div className='product-info'>
            <p>{name}</p>
            <p>Price :${price}</p>
            <p><small>Seler: {seller}</small></p>
            </div>
            <button className='product-btn' onClick={()=>props.handelerAddToCart(props.product)}>
                <p className='btn-text'>Add To Card</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;