import React, { useContext,useState,useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import { FaCheck } from 'react-icons/fa';
const CategoryDetails = () => {
  const {user} = useContext(AuthContext)
  const servicePagesAll = useLoaderData();
	const {_id,brand_name,img,original_price,resale_price,yearUsed,postedDate,Location,seller,report} = servicePagesAll;


  const handleProductOrdering = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const brandName = form.brandName.value;
    const phone = form.phone.value;
    const price = form.price.value;
    const date = form.date.value;
    const location = form.location.value;
    const description = form.description.value;


    const Ordering = {
      brandName: brandName,
      user: name,
      email,
      phone,
      location,
      price,
      date,
      description,

}
     
     console.log(Ordering);
     fetch(`https://mobile-phone-server-mu.vercel.app/orderings`,{
			method: "POST",
			headers:{
				'content-type': 'application/json'
			},
			body: JSON.stringify(Ordering)	
		})
		.then(res=> res.json())
		.then(data=>{
			console.log(data)
            // navigate('/dashboard')
     if(data.acknowledged){
      toast.success('Ordering successfully...!!')
      
     }
		})
	}

  const handleAddReported = (id) =>{
    console.log(id)
  const permission = window.confirm(`Are you report ${brand_name}`);
  if(permission){
    fetch(`https://mobile-phone-server-mu.vercel.app/products?id=${id}`, {
      method: "PUT"
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0){
        toast.success('Product reported')
        console.log(data);
        
      }
    })
  }

}

const [bluetic, setBluetic] = useState(null)


useEffect(()=>{
    fetch(`https://mobile-phone-server-mu.vercel.app/users`)
    .then(res=> res.json())
    .then(data=> {
        setBluetic(data)
        
    })
},[bluetic])



    return (

      <div className='bg-violet-200 py-10'>
            <h1 className='text-3xl font-semibold text-center py-10'>Mobile Phone Brand</h1>
          <>
          <section className="dark:bg-gray-800 dark:text-gray-100">
	       <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
		<Link rel="noopener noreferrer" to="/" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
			<img src={img} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
			<div className="p-6 space-y-2 lg:col-span-5">
				<h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{brand_name}</h3>
			
		<p className="text-sm dark:text-gray-400">original_price: {original_price}</p>
		<p className="text-sm dark:text-gray-400">resale_price: {resale_price}</p>
		<p className="text-sm dark:text-gray-400">postedDate: {postedDate}</p>
		<p className="text-sm dark:text-gray-400">Location: {Location}</p>
		<p className="text-sm dark:text-gray-400">seller: {seller}</p>
		<p className="text-sm dark:text-gray-400">Used: {yearUsed}year</p>
     

    {/* {
                    bluetic?.map(blue=> <>
                    {
                        blue.email === useremail && blue.verified && <FaCheck> className='text-blue-600'></FaCheck>
                    }
                    </>) 
                  } */}

      <div className=''>
               {
                report?
                <button disabled className='btn btn-error btn-sm text-white w-32'>Report</button>
                :
                <button onClick={()=>handleAddReported(_id)} className='mt-4 text-white btn bg-violet-600 w-full max-w-xs'>Report</button>
               }
                 </div>

			</div> 
		</Link>
		
 
	   <div>

		  <label htmlFor="ordering-modal" className="btn flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 dark:text-gray-900 ">Book Now</label>

          <input type="checkbox" id="ordering-modal" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box relative">
             <label htmlFor="ordering-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
             
          <form onSubmit={handleProductOrdering}>

             <input name='brandName' type="text" defaultValue={brand_name} className="input input-bordered w-full my-3 text-lg font-semibold sm:text-4xl " required />

             <input name='name' type="text" defaultValue={user?.displayName}  placeholder="your name" className="input input-bordered w-full my-3"  required/>
               
             <input name='email' type="email" defaultValue={user?.email} className="input input-bordered w-full my-3"  />

             <input name='price' type="text" defaultValue={original_price} className="input input-bordered w-full my-3" required />

            <input name='phone' type="phone" placeholder="Your Phone" className="input input-bordered w-full " required />

            <input name='date' type="text" placeholder="Purchase date" className="input input-bordered w-full mt-4 " required />

                <textarea name='location' className="textarea textarea-bordered w-full mt-4" placeholder="You Location" required></textarea>

                <textarea name="description" className="textarea textarea-bordered w-full mt-4" placeholder="Description" required></textarea>
                        
                  <input htmlFor="booking-modal" type="submit" value='Submit' className="mt-4 text-white btn bg-violet-600 w-full max-w-xs" > 
                    </input>
              </form>
           </div>
        </div>
      </div>
    </div>
</section>
    </>
</div>
    );
};

export default CategoryDetails;