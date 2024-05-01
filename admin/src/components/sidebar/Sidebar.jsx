import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar-options">
                <NavLink to='/add' className="side-option">
                    <img src={assets.add_icon} alt="" />
                    <p>Add Items</p>
                </NavLink>
                <NavLink to='/list' className="side-option">
                    <img className='list-icon' src={assets.list_icon} alt="" />
                    <p>List Items</p>
                </NavLink>
                <NavLink to='/orders' className="side-option">
                    <img src={assets.order_icon} alt="" />
                    <p>Orders</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Sidebar