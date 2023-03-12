import React from 'react';
import {useContext} from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import {useQuery} from '@tanstack/react-query';
import MyNewProductsTable from './MyNewProductsTable';
const MyNewProducts = () => {
    const {user} = useContext(AuthContext);
     
    
      const {data:allNewProducts = []} = useQuery({
        queryKey:['allNewProducts'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-phone-server-mu.vercel.app/allNewProducts');
            const data = await res.json();
            return data;

        }
    })

  // })
    
    return (
        <div>
            <h1 className='text-3xl'>My Product</h1>

            <div className="overflow-x-auto">
      <table className="table w-full">
   
        <thead>
          <tr>
           <th></th>
          
           <th>Email</th>
           <th>product_Name</th>
           <th>seller</th>
           <th>condition</th>
           <th>category</th>
           <th>location</th>
           <th>originalPrice</th>
           <th>resalePrice</th>
           <th>PurchaseDate</th>
           <th>Description</th>
           <th>Remove</th>
           <th>Advertised</th>
          </tr>
        </thead>
      <tbody>
    
                                
      { allNewProducts?.length && allNewProducts?.map(allNewProduct => <MyNewProductsTable
      key={allNewProduct._id}
      allNewProduct={allNewProduct}
      ></MyNewProductsTable>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyNewProducts;