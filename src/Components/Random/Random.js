import React from 'react';
import './Random.css'

const Random = ({random}) => {
    const {img, name, price} = random;
    console.log(random);
    return (
        <div>
            <div className='random-product'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Random;