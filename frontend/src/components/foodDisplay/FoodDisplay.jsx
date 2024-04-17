import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {
    
    const {food_list} = useContext(StoreContext)
    return (
        <div className='food-display' id='food-display'>
            <h2>Our Popular Dishes</h2>
        </div>
    )
}

export default FoodDisplay