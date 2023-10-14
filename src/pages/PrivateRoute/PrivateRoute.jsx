import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user,loader} = useContext(AuthContext);
    const currentLocation = useLocation();
   
    if(loader){

        return <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center'>
      <Spinner animation="border" role="status">
      </Spinner>
        </div>
    }
    else if(user){

        return children;
    }
    else{

        return <Navigate to={
         "/logIn"} state ={{ from : currentLocation}} replace></Navigate>
    }
};

export default PrivateRoute;