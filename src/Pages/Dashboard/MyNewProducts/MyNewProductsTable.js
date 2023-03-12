import React from 'react';
import {toast} from 'react-toastify';
const MyNewProductsTable = ({allNewProduct}) => {
    const {_id,email,productName,image,seller,condition,category,location,originalPrice,resalePrice,purchaseYear,description,advertised} = allNewProduct;

   
  const handleDelete = id =>{
    const getPermission = window.confirm('Are you sure want to delete this product?')
  if(getPermission){
    fetch(`https://mobile-phone-server-mu.vercel.app/allNewProducts?id=${id}`,{
      method: "DELETE",

    })
    .then(res=> res.json())
    .then(data=> {
      if(data.deletedCount > 0){
        console.log(data);
        toast.success('deleted success...!!')
      }

    })
  }

  }

  const handleAdvertised = (id) => {
        fetch(`https://mobile-phone-server-mu.vercel.app/allNewProducts?id=${id}`, {
            method: "PUT"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                toast.success('Advertised success...!!')
            }
            
        })
    
}

    return (
        <tr>
          <div className='avatar'>
         <div  className="w-24 rounded">
         <img src={image} alt=''/>
         </div>
          </div>
         
          <td>{email}</td> 
          <td>{productName}</td>
          <td>{seller}</td>
          <td>{condition}</td>
          <td>{category}</td>
          <td>{location}</td>
          <td>{originalPrice}</td>
          <td>{resalePrice}</td>
          <td>{purchaseYear}</td>
          <td>{description}</td>

          <td>
        <button onClick={()=> handleDelete(_id)} className="btn btn-outline btn-primary">Delete</button>
      </td>
      <td>
        {
          advertised ?
          <button disabled className="btn btn-outline btn-error">Advertising</button>
          :
          <button onClick={()=> handleAdvertised(_id)} className="btn btn-outline btn-info">Advertised</button>

        }
      </td>
        </tr>
    );
};

export default MyNewProductsTable;