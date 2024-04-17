import React, { useState } from 'react';
import ExploreMenu from '../../components/exploreMenu/ExploreMenu';
import Header from '../../components/header/Header';
import './Home.css';

const Home = () => {
    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <ExploreMenu category={category} setCategory={setCategory} />
        </div>
    );
}

export default Home;
