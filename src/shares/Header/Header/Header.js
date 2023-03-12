import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () =>{
    logOut()
    .then(toast.warning('Logout!!'))
      .catch(error=>console.log(error))
  }
  // console.log(user)
    return (
        <div className="navbar bg-violet-400 py-6 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Home</Link></li>
             <li><Link to='/blog'>Blog</Link></li>
             <li><Link to='/dashboard'>Dashboard</Link></li>
             <li><Link to='/priceList'>Price List</Link></li>
             <li><Link to='/about'>About Us</Link></li>
            </ul>
          </div> 
          
          <Link to='/' className="btn btn-ghost normal-case lg:text-4xl font-bold">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
       </svg>mMarket.com</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li><Link to='/'>Home</Link></li>
           <li><Link to='/blog'>Blog</Link></li>
           <li><Link to='/priceList'>Price List</Link></li>
             <li><Link to='/about'>About Us</Link></li>
          </ul>
        </div>
        <div className="">
          {
            user?.email ? 
            <>
             <ul className='px-2'><Link className='no-underline' to='/dashboard'>Dashboard</Link></ul>
            <button onClick={handleLogOut} className="btn bg-violet-600 first-letter hidden lg:flex text-dec px-2">LogOut</button>
           
            <span > <img src={user?.photoURL ? user.photoURL

          : <p className='text-sky-400 text-sm'>no photo</p> }
              alt=""
            style={{height:'40px'}}/> </span>

          <h4 className=' text-xl'>{
         user?.displayName ? user.displayName:'name Not Found'}</h4>

            </>
            :
            <Link to='/login' className="btn bg-violet-600">Login</Link>
          }
          
          
        </div>
        <label  htmlFor="order-drawer" tabIndex={1} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className=" drawer-overlay h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
       
      </div>
    );
};

export default Header;



