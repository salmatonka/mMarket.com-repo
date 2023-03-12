import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shares/Header/Header/Header';
import Footer from '../shares/Footer/Footer/Footer';
import{Link} from 'react-router-dom';

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
     
          <li><Link to='/dashboard'>All Products</Link></li>
          <li><Link to='/dashboard/addproducts'>Add Products</Link></li> 
          <li><Link to='/dashboard/myNewProducts'>My New Products</Link></li> 
          <li><Link to='/dashboard/allusers'>All User</Link></li>
           <li><Link to='/dashboard/reportedProduct'>ReportedProduct</Link></li> 
         
        </ul>
  
       </div>
      </div>
          <Footer></Footer>  
        </div>
    );
};

export default DashboardLayout;