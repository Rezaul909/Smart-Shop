import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Products.css'

const Products = (props) => {
    const handleData = props.handleData;
    const {id, name, img, price} = props.product;

    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h5>Model: {name}</h5>
            <p>price: ${price}</p>
            <p><small>ID:{id} </small></p>  
            <button className='px-5 py-2 rounded-pill' onClick={() =>handleData(props.product)}>
                Add to cart &nbsp;
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button> 
        </div>
    );
};

export default Products;