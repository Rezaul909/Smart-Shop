import React, { useState } from 'react';
import Products from '../Products/Products';
import SideMenu from '../SideMenu/SideMenu';
import './Shop.css';
const Shop = (props) => {
    const {products} = props;

    const [carts, setCarts] = useState([]);

    const handleData = (product) =>{
        const newCart = [...carts, product];
        if(newCart.length < 5){
            setCarts(newCart);   
        }
        // const isExist = newCart.find((cart) => cart.id === product.id);
        // console.log(isExist);
        // if(isExist){
            
        // }    
    }  

    // console.log(carts);
    return (
        <div className='shop-container'>
            <div className="cart-container">
                {
                    products.map(product => <Products 
                            key={product.id} 
                            product={product}
                            handleData= {handleData}>
                        </Products>)
                }
            </div>
            <div className="side-menu-container">
                <SideMenu carts={carts} ></SideMenu>
            </div>
        </div>
    );
};

export default Shop;