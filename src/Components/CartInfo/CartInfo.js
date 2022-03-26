import './CartInfo.css';

const CartInfo = ({cart}) => {

    const {name, img, price, id} = cart;

    return (
        <div className='cart-info rounded-pill'>
            <div className='single-cart-info'>
                <img src={img} alt="" />
                <h5>{name}</h5>
                <p>${price}</p>
            </div>
        </div>
    );
};

export default CartInfo;