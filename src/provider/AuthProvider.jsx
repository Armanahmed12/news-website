/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React, { createContext, } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import app from '../firebase/firebase.config';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true);
    console.log(user);
    const auth = getAuth(app);
    const newUserCreate = (email,password) =>{

     return createUserWithEmailAndPassword(auth,email,password);

    };
    const logInYourAccount = (email,password) =>{

          return signInWithEmailAndPassword(auth,email,password);

    };
    // get the current user
  useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth, (user)=>{

            setUser(user);
            setLoader(false);  
    });
    // stop observing while unmounting
    return () => {

          return unsubscribe();
    }
    },[auth])
    // react toast message
   const notifyUserWithMessage = (messageType, message) =>{

          if(messageType == 'success'){

              toast.success(message,{

                position: toast.POSITION.TOP_CENTER
              })
          }
          else{

            toast.error(message,{
                
                position: toast.POSITION.TOP_CENTER

            })

          }
   }  
  
    const authInfo = {auth,newUserCreate,logInYourAccount,notifyUserWithMessage,user,setUser,loader};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer/>
        </AuthContext.Provider>
    );
};

export default AuthProvider;