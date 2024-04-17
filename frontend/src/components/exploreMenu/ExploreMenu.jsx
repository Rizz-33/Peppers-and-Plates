import React from 'react';
import { menu_list } from '../../assets/assets';
import './ExploreMenu.css';

const ExploreMenu = ({ category, setCategory }) => {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Embark on Flavorful Adventures</h1>
            <p className='explore-menu-text'>Explore our exquisite menu, indulge in flavorful adventures. From appetizers to desserts, find satisfaction for every palate. Join us for culinary delight!</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} className={category === item.menu_name ? "active-image" : ""} alt="" />
                            <p className={category === item.menu_name ? "active-name" : ""}>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default ExploreMenu;
