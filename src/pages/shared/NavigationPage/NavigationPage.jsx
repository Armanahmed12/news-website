import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';
import { signOut } from 'firebase/auth';

const NavigationPage = ({background}) => {
  
  const {user,auth} = useContext(AuthContext);
  function handleSignOut(){

         signOut(auth).then(() => { 
            // user sign In successful
         }).catch(error =>{

          console.log(error);

         })
  }
    return (
        <Navbar collapseOnSelect expand="lg" className={`${background ? '' :'bg-danger-subtle'}`}>
     
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="px-4" id="responsive-navbar-nav">
          <Nav className="fw-bold hover:text-danger flex-grow-1 justify-content-center">
                <Link className='nav-link' to={'/'}>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav className="d-flex align-items-center"> 

               <FontAwesomeIcon icon={faUser}/>
          
             {
               user ?  <button onClick={handleSignOut} className="ms-2 nav-link bg-danger text-white fw-bold rounded">Sign Out</button> : <Link to={'/logIn'} className="ms-2 nav-link bg-danger text-white fw-bold rounded">LogIn</Link> 
             }
          
          </Nav>
        </Navbar.Collapse>
      
     </Navbar>
    );
};

export default NavigationPage;