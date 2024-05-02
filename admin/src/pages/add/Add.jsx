import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '../../assets/assets';
import './Add.css';

const Add = ({url}) => {

    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        name: '',
        description: '',
        price: '',
        category: 'Appetizers',
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
            setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        console.log(data);
    }, [data]);

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name",data.name)
        formData.append("description",data.description)
        formData.append("price",Number(data.price))
        formData.append("category",data.category)
        formData.append("image",image)
        const respond = await axios.post(`${url}/api/food/add`,formData);
        if (respond.data.success) {
            setData(
                {
                    name: '',
                    description: '',
                    price: '',
                    category: 'Appetizers',
                }
            )
            setImage(false)
            toast.success(respond.data.message)
        } else {
            toast.error(respond.data.message)
        }
    }

    return (
        <div className="add">
        <form className="flex-col" onSubmit={onSubmitHandler}>
            <div className="add-img-upload flex-col">
            <p>Upload Image</p>
            <label htmlFor="image">
                <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
            </label>
            <input
                type="file"
                id="image"
                hidden
                onChange={(e) => setImage(e.target.files[0])}
            />
            </div>
            <div className="add-product-name flex-col">
            <p>Product Name</p>
            <input
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                name="name"
            />
            </div>
            <div className="add-product-description flex-col">
            <p>Product Description</p>
            <textarea
                onChange={onChangeHandler}
                value={data.description}
                name="description"
                rows="6"
            />
            </div>
            <div className="add-category-price">
            <div className="add-category flex-col">
                <p>Product Category</p>
                <select
                onChange={onChangeHandler}
                name="category"
                value={data.category}
                >
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
                <input
                onChange={onChangeHandler}
                value={data.price}
                type="number"
                name="price"
                />
            </div>
            </div>
            <button type="submit" className="add-btn">
            ADD
            </button>
        </form>
        </div>
    );
};

export default Add;
