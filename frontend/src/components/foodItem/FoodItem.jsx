import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {

    const [itemCount,setItemCount] = useState(0)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
            </div>
            <div className="food-item-info">
                <div style={{ textAlign: 'right' }}>{!itemCount
                    ?<img className='add-remove' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt=''/>
                    :<div className='food-item-counter'>
                        <img className='add-remove' onClick={()=>setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt=''/>
                        <p>{itemCount}</p>
                        <img className='add-remove' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
                    </div>
                }</div>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price} LKR</p>
            </div>
        </div>
    )
}

export default FoodItem