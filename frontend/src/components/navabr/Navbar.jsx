import React, { useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';

const Navbar = () => {
  const [menu,setMenu] = useState("Home");
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</li>
        <li onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className='search_icon'/>
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" className='basket_icon'/>
          <div className="dot"></div>
        </div>
        <button>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar