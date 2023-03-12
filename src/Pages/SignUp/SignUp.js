import React from 'react';
import {useState,useContext} from 'react';
import { Link, useNavigate,useLocation} from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import {toast} from 'react-toastify';
import { useForm } from 'react-hook-form';
import useToken from '../../hooks/useToken';
import {getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const auth = getAuth(app);
const SignUp = () => {
	  

	const {register,handleSubmit,formState: { errors }} = useForm();
     
    const {createUser,updateUser} = useContext(AuthContext);
	const [signUpError,setSignUpError] = useState('');

	const [createdUserEmail, setCreatedUserEmail] = useState('');
	const [token] = useToken(createdUserEmail);
    const navigate = useNavigate;
	const location = useLocation();
    const provider = new GoogleAuthProvider();
	const from = location.state?.from?.pathname || '/'

    //   if(token){
	// 	navigate(from, { replace: true }) ;
	//   }

         const handleSignUp = (data) =>{
           console.log(data);
           setSignUpError('');

       createUser(data.email, data.password,data.role)
       .then(result =>{ 
           const user =result.user;
           console.log(user);
		   toast.success('user creates success')
		   
		    const userInfo ={
		   		displayName: data.name
		   	  }
		    updateUser(userInfo)
		   	 .then(()=>{
				saveAllUser(data.name, data.email);
		   	 })
	   
		   	  }).catch((error) => {
		       toast.error(error.message)
	   
		     })
	   
		.catch(error =>{
			console.log(error)
			setSignUpError(error.message)
		})

}

  const saveAllUser = (name, email) =>{
	const user ={name, email};
console.log(user)
	fetch('https://mobile-phone-server-mu.vercel.app/users', {
		method: "POST",
		headers: {
			"content-type" : "application/json",
			
		},
		body : JSON.stringify(user)
	   })
	   .then(res=> res.json())
	   .then(data=>{
		console.log(data)
		setCreatedUserEmail(email);
		
   })
	  
  }


  const handleGoogleSignUp =() =>{
	
    signInWithPopup(auth,provider)
	   .then(result =>{
           const user = result.user;
		   console.log(user);
		   const role = 'buyer'
		   userRole(user.displayName,user.email, user.role)
	   }).catch(error =>{
		console.log('error',error)
	   })
 }

 const userRole =(name,email,role)=>{
	const user = {name, email, role}
	console.log(name,email, role)
	fetch(`https://mobile-phone-server-mu.vercel.app/users`,{
		method: "POST",
		headers:{
			'content-type':'application/json'
		},
		body: JSON.stringify(user)

	})
	.then(res=> res.json())
	.then(data=> {
		console.log(data);
	})
	.catch(err=>{
		console.error(err)
	})

}


    return (
		<div className='h-[800px] flex justify-center items-center bg-violet-200'>
		<div className='w-96 p-7'>
		  <h2 className='text-3xl text-center font-bold'>SignUp</h2>
		  <form onSubmit={handleSubmit(handleSignUp)}>
	
	<div className="form-control w-full max-w-xs">
		<label className="label"> <span className="label-text">Name
		 <input type="text" 
		  {...register("name")}
		 className="input input-bordered w-full max-w-xs" /></span>
	   </label>
	   </div>

	<div className="form-control w-full max-w-xs">
		<label className="label"> <span className="label-text">Email
		 <input type="email" 
		  {...register("email",{ required: "Email Address is required" })}
		 className="input input-bordered w-full max-w-xs" /></span>
	   </label>
	   {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
	</div>

	
  
  <div className="form-control w-full max-w-xs">
		<label className="label"><span className="label-text">Password
		<input type="password" 
		{...register("password",{ required: "password is required",
		
	  })}

	   className="input input-bordered w-full max-w-xs" /></span></label>
	   {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}

  </div>

  <div className="form-control w-full max-w-xs">
    <label className="label">
		<span className="label-text">User</span>
    </label>
	
    <select required name="role" className="select select-bordered">
     <option selected>Buyer</option>
     <option>Seller</option>
    </select>
</div>


  <input type="submit" value='Sign Up' className="mt-4 text-white btn bg-violet-400 w-full max-w-xs" />
  {signUpError && <p className='text-red-600'>{signUpError}</p>}
  </form>

  <p>Already have a account <Link className='text-primary'  to='/login'>please login</Link> </p>
  <div className="divider">OR</div>     
	
  <button onClick={handleGoogleSignUp} className=" btn bg-violet-400 text-white w-full max-w-xs">
	Continue with google
  </button>

  </div> 
  </div> 
    );
};

export default SignUp;