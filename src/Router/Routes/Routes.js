import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";

import Category from "../../Pages/Category/Category/Category";
import CategoryDetails from "../../Pages/Category/CategoryDetails/CategoryDetails";

import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyProduct from "../../Pages/Dashboard/MyProduct/MyProduct";

import Home from "../../Pages/Home/Home/Home";

import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../shares/Blog/Blog/Blog";
import ErrorPage from "../../shares/ErrorPage/ErrorPage/ErrorPage";
import ReportedProduct from "../../Pages/Dashboard/ReportedProduct/ReportedProduct";
import Advertised from "../../Pages/Home/Advertised/Advertised";
import PhoneBrand from "../../Pages/Home/PhoneBrand/PhoneBrand";
import Addproducts from "../../Pages/Dashboard/Addproducts/Addproducts";
import MyNewProducts from "../../Pages/Dashboard/MyNewProducts/MyNewProducts";
import SellerRouter from "./SellerRouter";
import AdminRouter from "../AdminRouter/AdminRouter";
import About from "../../Pages/Home/About/About";
import PriceList from "../../Pages/Home/PriceList/PriceList";



const router = createBrowserRouter([

     {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,  
            },
            {
                path:'/home',
                element:<Home></Home>,  
            },
            {
                path:'/category',
                element:<Category></Category>,
                  
            },

            {
                path:'/pronebrand/:categorey',
                element:<PhoneBrand></PhoneBrand>,
                loader:({params})=>
                fetch(`https://mobile-phone-server-mu.vercel.app/newproducts/${params.categorey}`),  
            },
           
           {
                path:'/categoryDetails/:id',
                element:<CategoryDetails></CategoryDetails>,
                loader:({params})=>
                fetch(`https://mobile-phone-server-mu.vercel.app/products/${params.id}`),
                
            },

            {
                path:'/blog',
                element:<Blog></Blog>,  
            },
            {
                path:'/priceList',
                element:<PriceList></PriceList>,  
            },
            {
                path:'/about',
                element:<About></About>,  
            },

            {
                path:'/login',
                element:<Login></Login>,  
            },

            {
                path:'/signUp',
                element:<SignUp></SignUp>,  
            },

            {
                    path: '/advertised',
                    element: <Advertised></Advertised>
            },
   
        ]
    },
             
    {
        path:'/dashboard',
        errorElement: <ErrorPage></ErrorPage>,
        element: <DashboardLayout></DashboardLayout>,
        children:[
            
            {
                path:'/dashboard',
                element: <MyProduct></MyProduct>
            },
            {
                path:'/dashboard/addproducts',
             element:<Addproducts></Addproducts>,  
            },
            {
                path:'/dashboard/myNewProducts',
                element:<MyNewProducts></MyNewProducts>,  
            },
            {
             path:'/dashboard/allusers',
             element:<AllUsers></AllUsers>,  
            },
            {
                path:'/dashboard/reportedProduct',
                element:<ReportedProduct></ReportedProduct>,
            },
          
         
        ]
    }
])
export default router;