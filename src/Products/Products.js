import React from 'react';
import './Products.css'

const Products = (props) => {
    console.log(props);
    const {id, name, img, price} = props.product;
    return (
        <div className='product-container'>
            <img src={img} alt="" />
            <h5>Model: {name}</h5>
            <p>price: ${price}</p>
            <p><small>ID:{id} </small></p>  
            <button>Add to cart</button> 
        </div>
    );
};

export default Products;