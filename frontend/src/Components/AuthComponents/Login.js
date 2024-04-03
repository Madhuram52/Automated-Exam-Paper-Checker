// login.js

import React, { useState, useContext } from "react";
import { AuthContext } from "../../Context/auth-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usericon from "../../Assets/Img/usercon.png";
import keyicon from "../../Assets/Img/keyIcon.png";
import Form from "./Form";
import Input from "./Input";

const Login = ({ toggleForm }) => {
  const auth = useContext(AuthContext); // Accessing AuthContext

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch("http://localhost:8080/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       response.json().then((data) => {
    //         console.log("User ID:", data.userId);
    //         // Assuming your login endpoint returns a userId upon successful login
    //         auth.login(data.userId); // Using context method to set authentication
    //       });
    //     } else {
    //       response.json().then((data) => {
    //         alert(data.message);
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("An error occurred", error);
    //   });

    auth.login();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          icon={usericon}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          icon={keyicon}
        />
        <button className="login-button" type="submit">
          Log In
        </button>
      </Form>
      <p className="SwitchSL">
        Don't have an account?{" "}
        <a href="#!" onClick={toggleForm}>
          Sign up here
        </a>
      </p>
    </>
  );
};

export default Login;
