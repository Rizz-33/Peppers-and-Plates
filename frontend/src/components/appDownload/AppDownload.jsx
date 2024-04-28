import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br /> Peppers & Plates App</p>
            <dix className="app-download-platforms">
                <img className="playstore" src={assets.play_store} alt="" />
                <img className='appstore' src={assets.app_store} alt="" />
            </dix>
        </div>
    )
}

export default AppDownload