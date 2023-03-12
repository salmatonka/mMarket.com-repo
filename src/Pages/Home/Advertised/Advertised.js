import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PhoneBrand from '../PhoneBrand/PhoneBrand';
const Advertised = () => {
    const {data:advertised = [] , refetch , } = useQuery({
        queryKey: ['advertised'],
        queryFn:async()=>{
            const res = await fetch(`https://mobile-phone-server-mu.vercel.app/AdvertisedProduct`)
            const data = await res.json()
            return data;
        }
    })
    refetch()
    
    return (
        <div>
            <h1 className='text-3xl font-semibold text-center py-10'>Advertised</h1>
            
           <div className='grid md:grid-cols-3 gap-10 grid-cols-1  py-24 '>
           {
                advertised.map(a=> <PhoneBrand
                key={a._id}
                brand={a}
                
                ></PhoneBrand>)
            }
            
           </div>
        </div>
    );
};
export default Advertised;