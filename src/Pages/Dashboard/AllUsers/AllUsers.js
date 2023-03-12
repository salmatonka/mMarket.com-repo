import { useQuery } from '@tanstack/react-query';
import React from 'react';
import {toast} from 'react-toastify';
const AllUsers = () => {
    const {data:users = []} = useQuery({
        queryKey:['users'],
        queryFn: async() =>{
            const res = await fetch('https://mobile-phone-server-mu.vercel.app/users');
            const data = await res.json();
            return data;

        }
    })

    const handleMakeAdmin=(id)=>{
        console.log(id);
        const adminPermission = window.confirm('Do you want to admin?');
        if(adminPermission){
         fetch(`https://mobile-phone-server-mu.vercel.app/users/admin/${id}`,{
             method: "PUT"
         })
         .then(res=> res.json())
         .then(data=> {
             console.log(data);
             if(data.modifiedCount > 0){
                 toast.success('MakeAdmin')
 
             }
         })
        }
     }


    const handleDelete=(id)=>{
        console.log(id)
        const userPermission = window.confirm('Deleted users...!');
        if(userPermission){
            fetch(`https://mobile-phone-server-mu.vercel.app/users?id=${id}`,{
                method: "DELETE"

            })
            .then(res=> res.json())
            .then(data=> {
                if(data.deletedCount > 0){
                toast.success('Deleted Successfully...!')
                
                }

            })
        }
    }

    const handleVerify=(id)=>{
        console.log(id);
        const getPermission = window.confirm('Do you want to verify?');
        if(getPermission){
         fetch(`https://mobile-phone-server-mu.vercel.app/users?id=${id}`,{
             method: "PUT"
         })
         .then(res=> res.json())
         .then(data=> {
             console.log(data);
             if(data.modifiedCount > 0){
                 toast.success('verified')
 
             }
         })
        }
     }

     

    return (
        <div>
            <h1 className='text-3xl'>All Users</h1>

        <div className="overflow-x-auto">
          <table className="table w-full">
           <thead>
            <tr>
             <th></th>
             <th>User</th>
             <th>User Email</th>
             <th>Make Admin</th>
             <th>User Verify</th>
             <th>User Delete</th>
            </tr>
          </thead>
            <tbody>
                      
               {
                 users?.map((user, i)=><tr key={user._id}>
                  <th>{i+1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  
                  <td><button onClick={()=>handleMakeAdmin(user._id)} className='btn btn-outline btn-primary'>Admin</button></td>
            <td>
                  {
                        user.verified ? 
                        <button disabled className='btn btn-secondary btn-sm'>verified</button>
                        :
                        <button onClick={()=>handleVerify(user._id)} className='btn btn-outline btn-info'>verify</button>
                    }
                    </td>
                     <td><button onClick={()=> handleDelete(user._id)} className='btn btn-outline btn-error'>Delete</button></td>


                   </tr>)
                }
            </tbody>
      </table>
   </div>
</div>
    );
};

export default AllUsers;