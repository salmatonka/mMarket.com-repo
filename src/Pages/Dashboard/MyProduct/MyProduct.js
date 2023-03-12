import React from 'react';
import {useContext} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';


const MyProduct = () => {
    const {user} = useContext(AuthContext);

    

    const { data:orderings = [] } = useQuery({
        queryKey: ['orderings', user?.email],
        queryFn: async() =>{
            const res = await fetch(`https://mobile-phone-server-mu.vercel.app/orderings?email=${user?.email}`);
          const data = await res.json();
          return data;
        } 
         
      })
      // refetch();
      // if(isLoading){
      //   return <p className='text-5xl'>Loading....</p>
      // }
    return (
        <div>
            <h1 className='text-3xl'>My Product</h1>

            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>User Name</th>
         <th>Email</th>
         <th>Brand_name</th>
         <th>Original_price</th>
         <th>Location</th>
         <th>Phone</th>
         <th>PurchaseDate</th>
         <th>Description</th>
        
      </tr>
    </thead>
    <tbody>
     
      {orderings?.length && orderings.map((ordering, i) => <tr key={ordering._id}>
         <th>{i+1}</th>
         
         <th>{ordering.user}</th>
         <th>{ordering.email}</th>
         <th>{ordering.brandName}</th>
         <th>{ordering.price}</th>
         <th>{ordering.location}</th>
         <th>{ordering.phone}</th>
         <th>{ordering.date}</th>
         <th>{ordering.description}</th>

      </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyProduct;


