import React from 'react';
import Products from '../Products/Products';
import './Shop.css';
const Shop = (props) => {
    const products = props.products;
    return (
        <div className='shop-container'>
            <div className="cart-container">
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
            <div className="side-menu">
                <p>world</p>
            </div>
        </div>
    );
};

export default Shop;