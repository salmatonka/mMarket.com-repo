import React, {useState} from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({product}) => {
    const {_id,brand_name,img,original_price,resale_price,yearUsed,postedDate,Location,seller} = product;
    
    return (
        <div className=" rounded-md shadow-md bg-violet-300 dark:text-gray-100">
        <img src={img} alt="" className="object-cover object-center w-full rounded-t-md h-72 " />
        <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
                <h2 className="text-2xl font-semibold tracking-wide">{brand_name}</h2>

             <p className="text-sm dark:text-gray-400">original_price: {original_price}</p>
		     <p className="text-sm dark:text-gray-400">resale_price: {resale_price}</p>
		     <p className="text-sm dark:text-gray-400">Location: {Location}</p>
		     <p className="text-sm dark:text-gray-400">Used:
             {yearUsed}</p>
		     <p className="text-sm dark:text-gray-400">Seller: 
             {seller}</p>
		     <p className="text-sm dark:text-gray-400">Posted_Date: 
             {postedDate}</p>

   
               
            </div>
            <Link to={`/categoryDetails/${_id}`}><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 
            hover:bg-violet-500  dark:text-gray-900">Details</button></Link>

        
        </div>
    </div>
)};

export default CategoryCard;