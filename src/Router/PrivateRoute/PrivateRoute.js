import React, { useContext } from 'react';
import Spinner from '../../Pages/Spinner/Spinner';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
const PrivateRoute = ({children}) => {
    const {user,loading} =useContext(AuthContext);
    const location = useLocation();
    console.log(loading);


    if (loading){

        return <Spinner></Spinner>
    }


    if (user ){
    return children;
        
}

return <Navigate to='/login' state={{ from: location }} replace />

};


export default PrivateRoute;