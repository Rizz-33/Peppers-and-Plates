import React, { useState } from 'react';
import AppDownload from '../../components/appDownload/AppDownload';
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import Header from '../../components/header/Header';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
            <FoodDisplay category={category}/>
            <AppDownload />
        </div>
    );
}

export default Home;
