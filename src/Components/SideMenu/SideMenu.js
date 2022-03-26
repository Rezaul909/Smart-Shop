import React, { useState } from 'react';
import CartInfo from '../CartInfo/CartInfo';
import Random from '../Random/Random';
import './SideMenu.css'

const SideMenu = ({carts}) => {
    console.log(carts);

    const [random, setRandom] = useState([]);
    const [clear, setClear] = useState([]);

    const selectItem =() =>{
        const randomNumber = Math.floor(Math.random()*4);
        const newCarts = carts[randomNumber];
        setRandom(newCarts);
    }
    const clearData = () =>{
        const clearData = [...carts,clear];
        setClear([]);
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
            <Random random={random}></Random>
        </div>
    );
};

export default SideMenu;