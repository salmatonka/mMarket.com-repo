import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shares/Header/Header/Header';
import Footer from '../shares/Footer/Footer/Footer';
const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
        <input id="order-drawer" type="checkbox" className="drawer-toggle" />
         <div className="drawer-content ">
         <Outlet></Outlet>
     
  
          </div> 
        <div className="drawer-side">
         <label htmlFor="order-drawer" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
     
          <li><a>Sidebar Item 1</a></li>
         <li><a>Sidebar Item 2</a></li>
        </ul>
  
       </div>
      </div>
          <Footer></Footer>  
        </div>
    );
};

export default DashboardLayout;