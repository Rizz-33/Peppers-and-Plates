import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import './FoodItem.css'

const FoodItem = ({id,name,price,description,image}) => {
    
    const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={url+"/images/"+image} alt="" />
                {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt=''/>
                    :<div className='food-item-counter'>
                        <img className='add-remove' onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt=''/>
                        <p>{cartItems[id]}</p>
                        <img className='add-remove' onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
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