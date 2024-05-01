import React from 'react'
import { assets } from '../../assets/assets'
import './Add.css'

const Add = () => {
    return (
        <div className='add'>
            <form className='flex-col'>
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id='image' hidden required/>
                </div>
                <div className="add-product-name flex-col">
                    <p>Product Name</p>
                    <input type="text" name='name'/>
                </div>
                <div className="add-product-description flex-col">
                    <p>Product Description</p>
                    <textarea name="description" rows="6" required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product Category</p>
                        <select name="category">
                            <option value="Appetizers">Appetizers</option>
                            <option value="Salads">Salads</option>
                            <option value="Entrees">Entrees</option>
                            <option value="Sandwiches">Sandwiches</option>
                            <option value="Pizzas">Pizzas</option>
                            <option value="Soups">Soups</option>
                            <option value="Pasta">Pasta</option>
                            <option value="Desserts">Desserts</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input type="Number" name='price' />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add