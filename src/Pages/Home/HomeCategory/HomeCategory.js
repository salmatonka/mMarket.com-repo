import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CategoryCard from '../../CategoryCard/CategoryCard/CategoryCard';

const HomeCategory = () => {

    const {data:products =[]} = useQuery({
        queryKey:['products'],
        queryFn: async()=>{
            const res = await fetch('https://mobile-phone-server-mu.vercel.app/products')
            const data = await res.json()
            return data;
        }
    })

   
    return (
        <div className='bg-violet-200'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand
                </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 pb-10'>
              <Link to={`/products/iphone`}><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 hover:bg-violet-300 dark:text-gray-900">iphone</button></Link>
              <Link to={`/products/samsung`}><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 hover:bg-violet-300 dark:text-gray-900">Samsung</button></Link>
              <Link to={`/products/redmi`}><button type="button"
             className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 hover:bg-violet-300 dark:text-gray-900">Redmi</button></Link>
             
            </div>

            <div className='grid grid-cols-1 gap-10 my-10'>
            {/* {
                categories.map(categorie =>
                    key={categorie._id}
                    categorie={categorie}
                 )
            } */}
            
        </div>
        </div>
      
    );
};

export default HomeCategory;