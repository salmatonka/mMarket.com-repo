import React from 'react';
import Category from '../../Category/Category/Category';
import About from '../About/About';

import Banner from '../Banner/Banner';
import ChooseOption from '../ChooseOption/ChooseOption';

import HomeBanner from '../HomeBanner/HomeBanner';
import HomeCategory from '../HomeCategory/HomeCategory';
import Offer from '../Offer/Offer';
import PriceList from '../PriceList/PriceList';


const Home = () => {
    return (
        <div>
            <Banner />
            <HomeCategory />
            <Category />
            <HomeBanner />
            <About />
            <PriceList />
            <ChooseOption />
            {/* <Offer /> */}
        </div>
    );
};

export default Home;