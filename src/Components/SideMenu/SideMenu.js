import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import './SideMenu.css'

const SideMenu = (props) => {
    const {carts} = props
    // console.log(carts);

    let name;
    let price;
    for(const cart of carts){
        name = cart.name;
        price = cart.price;
    }

    return (
        <div className='side-menu'>
            <h2 className='py-5'>Selected Models:</h2>
            {/* <h4>{name}</h4>
            <p>{price}</p> */}
            <CartInfo name={name} price={price}></CartInfo>
            <button className='mb-5 me-5 px-3 py-1 rounded-pill'>Choose a phone!</button>
            <button className='px-3 py-1 rounded-pill'>Clear All</button>
        </div>
    );
};

export default SideMenu;