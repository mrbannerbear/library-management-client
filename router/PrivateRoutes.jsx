/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext';

const PrivateRoutes = ({children}) => {

    const location = useLocation()
    const { user, loading } = useContext(AuthProvider)

  if(user){
    return children
  }
  if(loading){
    return (
        <div className="h-[50vh] flex justify-center items-center">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="loading loading-spinner loading-lg"></span>
            </h3>
          </div>
        </div>
      );
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>
};

export default PrivateRoutes;