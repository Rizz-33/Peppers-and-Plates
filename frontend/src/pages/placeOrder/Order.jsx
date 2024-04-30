import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Order.css'

const Order = () => {

    const {getTotalCartAmount} = useContext(StoreContext)
    
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='   First Name'/>
                    <input type="text" placeholder='   Last Name'/>
                </div>
                <input type="email" placeholder='   Email'/>
                <input type="text" placeholder='   Street'/>
                <div className="multi-fields">
                    <input type="text" placeholder='   City'/>
                    <input type="text" placeholder='   State'/>
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='   Zip Code'/>
                    <input type="text" placeholder='   Country'/>
                </div>
                <input type="text" placeholder='   Phone'/>
            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Your Order</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>{getTotalCartAmount()} LKR</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>{getTotalCartAmount()===0?0:200} LKR</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <p>{getTotalCartAmount()===0?0:getTotalCartAmount()+200} LKR</p>
                        </div>
                    </div>
                    <button>PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default Order