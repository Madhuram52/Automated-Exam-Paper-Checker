import React, { useState ,useContext } from "react";
import Login from "../Components/AuthComponents/Login";
import Signup from "../Components/AuthComponents/Signup";
// import "./Auth.css";
// import { AuthContext } from "../Context/auth-context";

const Auth = () => {
  
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="background-element">
      <div className="main-whole">
        <h1 className="authHeading">{isLogin ? "Welcome Back!" : "New Here?"}</h1>
        <h1 className="authTitleText">{isLogin ? "Log in to your account" : "Sign up with us!"}</h1>
        {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
      </div>
    </div>
  );
};

export default Auth;
