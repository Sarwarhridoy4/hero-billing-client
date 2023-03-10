import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/AuthContext';
import Loading from '../../Loading/Loading';



const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    console.log(user);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
}
export default Private;