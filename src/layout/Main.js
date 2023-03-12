import React from 'react';
import Footer from '../shares/Footer/Footer/Footer';
import Header from '../shares/Header/Header/Header';
import { Outlet } from 'react-router-dom';
const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;