import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import CategoryCard from '../../CategoryCard/CategoryCard/CategoryCard';
import { useQuery } from '@tanstack/react-query';

//9card home
const Category = () => {
   

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
            {/* <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand: {services.length}
                </h1> */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
            {
                products.map(product => <CategoryCard
                    key={product.id}
                    product={product}
               
                ></CategoryCard>)
            }
            </div>
         
        </div>
    );
};

export default Category;