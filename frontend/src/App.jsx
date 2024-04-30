import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import LoginPopup from './components/loginPopup/LoginPopup';
import Navbar from './components/navabr/Navbar';
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import Order from './pages/placeOrder/Order';

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
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
