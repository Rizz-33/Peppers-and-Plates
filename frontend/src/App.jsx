import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';
import Navbar from './components/navabr/Navbar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import MyOrders from './pages/myorders/MyOrders';
import Order from './pages/placeOrder/Order';
import Verify from './pages/verify/Verify';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : null}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path='/verify' element={<Verify />}/>
          <Route path='/myorders' element={<MyOrders />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
