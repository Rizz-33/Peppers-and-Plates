import React, { useContext, useState } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './Order.css'

const Order = () => {

    const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

    const [data,setData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        street:"",
        city:"",
        state:"",
        zipcode:"",
        country:"",
        phone:""
    })

    const onChangeHandler= (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))
    }

    
    return (
        <form className='place-order'>
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='   First Name'/>
                    <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='   Last Name'/>
                </div>
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='   Email'/>
                <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='   Street'/>
                <div className="multi-fields">
                    <input name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='   City'/>
                    <input name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='   State'/>
                </div>
                <div className="multi-fields">
                    <input name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='   Zip Code'/>
                    <input name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='   Country'/>
                </div>
                <input name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='   Phone'/>
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