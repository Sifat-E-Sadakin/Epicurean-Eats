import React from 'react';
import Banner from '../Components/Banner';
import Category from '../Components/Category';
import Menu from '../Components/Menu';
import Featured from '../Components/Featured';
import Reviews from '../Components/Reviews';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Menu></Menu>
            <Featured></Featured>
            <Reviews></Reviews>
        </div>
    );
};

export default HomePage;