import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Orders.css';

const Orders = ({url}) => {

    const [order,setOrder] = useState([]);

    const fetchAllOrders = async () => {
        const response = await axios.get(url+"/api/order/list");
        if (response.data.success) {
            setOrder(response.data.data);
            console.log(response.data.data);
        } else {
            toast.error("Error loading the orders. Please try again!")
        }
    }

    useEffect(()=>{
        fetchAllOrders();
    },[])

    return (
        <div className='order add'>
            <div className="order-list">
                {order.map((order, index) => (
                    <div key={index} className="order-item">
                        <img className='parcel_icon' src={assets.parcel_icon} alt="" />
                        <div>
                            <p className="order-item-food">
                                {order.items.map((item, itemIndex) => {
                                    return item.name + " x " + item.quantity + (itemIndex === order.items.length - 1 ? '' : ', ');
                                })}
                            </p>
                            <p className="order-item-name">{order.address.firstName + " " + order.address.lastName}</p>
                            <div className="order-item-address">
                                <p>{order.address.street+", "}</p>
                                <p>{order.address.city+", "+order.address.state+", " +order.address.country+", "+order.address.zipcode}</p>
                            </div>
                            <p className='order-item-phone'>{order.address.phone}</p>
                        </div>
                        <p>Items : {order.items.length}</p>
                        <p>{order.amount} LKR</p>
                        <select>
                            <option value="Food processing">Food processing</option>
                            <option value="Out for delivery">Out for delivery</option>
                            <option value="Delivered">Delivered</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    );
    
}

export default Orders