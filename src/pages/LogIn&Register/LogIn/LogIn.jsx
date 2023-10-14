import React, { useEffect } from "react";
import NavigationPage from "../../shared/NavigationPage/NavigationPage";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";

const LogIn = () => {

  const { logInYourAccount, notifyUserWithMessage,setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
        
    const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    //  logIN with email and password
    logInYourAccount(email, password)
    .then((userCredential) => {
      const loggedInUser = userCredential.user;
      console.log(loggedInUser);
      setUser(loggedInUser);
      notifyUserWithMessage('success','User has been logged In properly.');
      form.reset();
      navigate(location.state ? location.state.from.pathname : 
        '/', {replace : true});
    }).catch(error =>{

       notifyUserWithMessage('error', error.message);

    })
  };

  return (
    <div style={{ minHeight: "100vh" }} className="bg-primary-subtle pb-5">
      <NavigationPage background={"bg-danger-subtle"}></NavigationPage>
      <form
        onSubmit={handleLogIn}
        className="bg-white w-50 mt-5 mx-auto px-5 py-3 rounded" >
        <h2 className="fw-bold mt-3 text-center">Login your account</h2>
        <hr className="text-danger border-bottom border-1 border-warning my-4 rounded" />
        <div className="from-element">
          <label className="fw-bold fs-5" htmlFor="email">
            Email
          </label>
          <br />
          <input
            className="w-100 mt-1 bg-primary-subtle px-2 border-0"
            type="email"
            name="email"
            placeholder="Enter your email address"
            id="email"
            autoComplete="on"
            required
          />
        </div>
        <div className="from-element mt-3">
          <label className="fw-bold fs-5" htmlFor="password">
            Password
          </label>
          <br />
          <input
            className="w-100 mt-1 bg-primary-subtle px-2 border-0"
            type="password"
            name="password"
            placeholder="Enter your email password"
            id="password"
            autoComplete="on"
            required
          />
          <p
            style={{ cursor: "pointer" }}
            className="text-end tw-bold text-danger fs-5"
          >
            Forget password?
          </p>
        </div>
        <input
          className="bg-dark w-100  text-center mt-2 py-2 rounded fw-bold text-white"
          type="submit"
          value="LogIn"
        />
        <h2 className="fs-5 text-center mt-4">
          Don't have any account?<Link to={"/register"}> Register</Link>
        </h2>
      </form>
    </div>
  );
};

export default LogIn;
