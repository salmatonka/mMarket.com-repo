import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';

const AdminRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation()

    // if(loading || isAdminLoading){
    //     return <p className='text-6xl'>Loading...</p>
    // }
    // if(user && isAdmin){
    //     return children;
    // }
    //  <Navigate to='/login' state={{from: location}} replace></Navigate>
    return

    
};

export default AdminRouter;