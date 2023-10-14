/* eslint-disable react/no-unknown-property */
import React from 'react';
import './Register.css';
import { Link } from 'react-router-dom';
import NavigationPage from '../../shared/NavigationPage/NavigationPage';
import { useContext } from 'react';
import { AuthContext } from '../../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useRef } from 'react';
import { useState } from 'react';

const Register = () => {   

    const refOfCheckbox = useRef('');
    const refOfRegister = useRef('');

    const {newUserCreate, notifyUserWithMessage, user, setUser} = useContext(AuthContext);

    // check the accepts and terms button
 const handleTerms = () =>{
    const isCheckboxClicked = refOfCheckbox.current.checked;
        if(!isCheckboxClicked){
           
            refOfRegister.current.className += ' disabled';
        }
        else {
          
            refOfRegister.current.classList.remove('disabled');
        } 
      
  };

    const createNewUser = (event) =>{

       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photoUrl = form.photoUrl.value;
       const email = form.email.value;
       const password = form.password.value;
   
       newUserCreate(email,password)
       .then(result =>{

            const createdUser = result.user;
            setUser(createdUser);
            form.reset();
            console.log(createdUser);
            notifyUserWithMessage('success','New user has been created perfectly');
            updateProfile(createdUser ,{

                displayName : name,
                photoURL : photoUrl

            }).then(()=>{
                // Update successful
            }).catch(error=>{

                 notifyUserWithMessage('error',error.message)
            })

    }).catch(error =>{

        notifyUserWithMessage('error',error.message);
    })
       
};    
  return (
  <div style={{ minHeight: '100vh' }} className='bg-primary-subtle pb-5'>
  <NavigationPage background={'bg-danger-subtle'}></NavigationPage>
  <form onSubmit={createNewUser} className='bg-white w-50 mt-5 mx-auto px-5 py-3 rounded'>
      <h2 className="fw-bold mt-3 text-center">Register your account</h2>
      <hr className='text-danger border-bottom border-1 border-warning my-4 rounded' />
      <div className="from-element">
          <label className='fw-bold fs-5' htmlFor="name">
              Your Name
          </label><br />
          <input className="w-100 mt-1 bg-primary-subtle px-2 border-0" type='text' name="name" placeholder='Enter Your Name' id="name" autoComplete='on' required/>
      </div>
      {/* Photo Url */}
      <div className="from-element mt-3">
          <label className='fw-bold fs-5' htmlFor="photo">
              Photo Url
          </label><br />
          <input className="w-100 mt-1 bg-primary-subtle px-2 border-0" type='url' name="photoUrl" placeholder='Enter Your photo Url' id="photo" autoComplete='on' required/>
      </div>
      <div className="from-element mt-3">
          <label className='fw-bold fs-5' htmlFor="email">
              Email
          </label><br />
          <input className="w-100 mt-1 bg-primary-subtle px-2 border-0" type="email" name="email" placeholder='Enter your email address' id="email" autoComplete='on' required/>
      </div>
      <div className="from-element mt-3 mb-4">
          <label className='fw-bold fs-5' htmlFor="password">
              Password
          </label><br />
          <input className="w-100 mt-1 bg-primary-subtle px-2 border-0" type="password" name="password" placeholder='Enter your email password' id="password" autoComplete='on' required/>
      </div>
      {/* Terms and condition with checkbox. */}
      <div className="d-flex fs-5">
          <input style={{width:'1.4rem'}} ref={refOfCheckbox} onClick={handleTerms} id="checkbox" type="checkbox" required/>
          <label forhtml="checkbox">&nbsp; Accept <Link to='/terms' className='text-primary text-decoration-underline'>Term & Conditions</Link></label>
      </div>
      <input ref={refOfRegister} className='bg-danger text-white w-100 text-center mt-2 py-2 rounded fw-bold border-0 disabled' type="submit" value="Register"/>

      <h2 className="fs-5 text-center mt-4">Already have an account?<Link to={'/login'}> Log In</Link></h2>
  </form>
 </div>

  ) 
};
export default Register;