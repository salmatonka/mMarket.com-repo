import React from 'react';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import {toast} from 'react-toastify';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';


const Addproducts = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
              
    const handleAddSubmit = event =>{
        event.preventDefault()
        const form  = event.target;
        const productName = form.productName.value;
        const image = form.image.files[0];
        const seller = form.seller.value;
        const category = form.category.value;
        const condition = form.condition.value;
        const location = form.location.value;
        const email = form.email.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const purchaseYear = form.purchaseYear.value;
        const description = form.description.value;
        
        // console.log(productName,image,seller,condition,category,location,email,originalPrice,resalePrice,purchaseYear,description);

                 const AllProducts={

                    productName: productName,
                    seller,
                    condition,
                    category,
                    location,
                    userEmail:user.email,
                    originalPrice,
                    resalePrice,
                    purchaseYear,
                    description,
                    email,image
                    
                 }
                 console.log(AllProducts);
                
                     fetch(`https://mobile-phone-server-mu.vercel.app/products`,{
                         method: "POST",
                         headers:{
                             'content-type': 'application/json'
                         },
                         body: JSON.stringify(AllProducts)
                     })
                     .then(res=> res.json())
                     .then(data=> {
                         toast.success('new product add....!')
                          navigate('/dashboard/myNewProducts')
 
                     })
                }
 
    
    
    return (
        <div>
              <h1 className='text-3xl'>Addproducts</h1>
       <div className='bg-violet-200'>
       <section className="p-6 dark:bg-gray-800 dark:text-gray-50">
	<form onSubmit={handleAddSubmit} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="productName" className="text-sm">Product Name</label>
					<input name="productName" id="productName" type="text"  className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="image" className="text-sm">Image</label>
					<input name="image" id="image" type="file" className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="seller" className="text-sm">Seller</label>
					<input defaultValue={user?.seller} name='seller' id="seller" type="text" className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>
				
				<div className="col-span-full sm:col-span-3">
                    <label className="label"> <span className="label-text">condition</span></label>
                    <select required name='condition' className="select select-bordered w-full"> 
                         <option>Good</option>
                         <option>Fair</option>
                         <option>Excellent</option>
                    </select>
                </div>

                <div className="col-span-full sm:col-span-3">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select required name='category' className="select select-bordered w-full"> 
                         <option value='ipone'>ipone</option>
                         <option value='samsung'>samsung</option>
                         <option value='redmi'>redmi</option>
                    </select>
                </div>

                <div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input defaultValue={user.email} name='email' id="email" type="email"  className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>

                <div className="col-span-full sm:col-span-3">
					<label htmlFor="location" className="text-sm">Location</label>
					<input name="location" id="location" type="text"  className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>

                <div className="col-span-full sm:col-span-3">
					<label htmlFor="originalPrice" className="text-sm">Original_price</label>
					<input name="originalPrice" id="originalPrice" type="text"  className="pt-2 w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>

                <div className="col-span-full sm:col-span-3 ">
					<label htmlFor="resalePrice" className="text-sm">Resale Price</label>
					<input name='resalePrice' id="resalePrice" type="text"  className="w-full pt-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>

                <div className="col-span-full sm:col-span-3 ">
					<label htmlFor="purchaseYear" className="text-sm">Purchase Year</label>
					<input name="purchaseYear" id="purchaseYear" type="text"  className="w-full pt-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900" required/>
				</div>

                <div className="col-span-full sm:col-span-3">
					<label htmlFor="description" className="text-sm"></label>
					<textarea name='description' className="textarea textarea-bordered" placeholder="Description" required></textarea>
				</div>
                <input  type="submit" value='Submit' className="mt-4 text-white btn bg-violet-400 w-full max-w-xs" />
			</div>
		</fieldset>
		
	</form>
</section>
       </div>
     
           
        </div>
    );
};

export default Addproducts;