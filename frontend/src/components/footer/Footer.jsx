import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo_white} alt="" className='logo'/>
                    <p className='contentp'>Enjoy the exquisite flavors at Peppers & Plates! Our menu offers a variety of delicious dishes, from appetizers to desserts. Order now for a delightful dining experience!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" className='facebook'/>
                        <img src={assets.twitter_icon} alt="" className='twitter'/>
                        <img src={assets.linkedin_icon} alt="" className='likedin'/>
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+94 70 124 4832</li>
                        <li>contact@pappersandplates.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © papperandplates.com - All Right Reserved.</p>
        </div>
    )
}

export default Footer