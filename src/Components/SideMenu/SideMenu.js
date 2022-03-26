import React from 'react';
import CartInfo from '../CartInfo/CartInfo';
import './SideMenu.css'

const SideMenu = ({carts}) => {

    // console.log(carts);
    let random;
    const selectItem =() =>{
        random = Math.floor(Math.random()*4);
    }
    const clearData = () =>{
        
    }

    return (
        <div className='side-menu'>
            <h2 className='py-5'>Selected Models:</h2>
            {
                carts.map( cart => <CartInfo key={cart.id} cart={cart}></CartInfo>)
            }
            <button onClick={selectItem} className='mb-5 me-5 px-3 py-1 rounded-pill'>Choose a phone!
            </button>
            <button onClick={clearData} className='px-3 py-1 rounded-pill'>Clear All</button>
        </div>
    );
};

export default SideMenu;