import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Cart.css';

const Cart = () => {

    const {cartItems, food_list, removeFromCart} = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
            </div>
        </div>
    )
}

export default Cart