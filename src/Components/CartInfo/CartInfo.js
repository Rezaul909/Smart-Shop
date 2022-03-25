import React from 'react';
import './CartInfo.css';

const CartInfo = (props) => {
    const {name, price} = props;
    console.log(props);
    return (
        <div>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
    );
};

export default CartInfo;