import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import './Navbar.css';

const Navbar = ({setShowLogin}) => {

  const [menu,setMenu] = useState("Home");

  const {getTotalCartAmount,token,setToken} = useContext(StoreContext);

  const navigate = useNavigate();

  const logout = () =>{
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  }

  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href="#explore-menu" onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href="#app-download" onClick={()=>setMenu("Mobile-App")} className={menu==="Mobile-App"?"active":""}>Mobile App</a>
        <a href="footer" onClick={()=>setMenu("Contact-Us")} className={menu==="Contact-Us"?"active":""}>Contact Us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" className='search_icon'/>
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" className='basket_icon'/></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        {!token?<button onClick={()=>setShowLogin(true)}>Sign In</button>
        : <div className='navbar-profile'>
          <img className='profile_img' src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img className='profile_bag' src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img className='profile_img' src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div> }
      </div>
    </div>
  )
}

export default Navbar