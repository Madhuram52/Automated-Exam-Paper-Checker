// signup.js

import React, { useState, useContext } from "react";
import validator from "validator";
import { AuthContext } from "../../../../../EPC/EPC/frontend/src/Context/auth-context";
import Form from "./Form";
import Input from "./Input";
import usericon from "../../Assets/Img/usercon.png";
import keyicon from "../../Assets/Img/keyIcon.png";

const Signup = ({ toggleForm }) => {
  const auth = useContext(AuthContext);

  const initialFormData =
  {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const initialErrors = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setErrors({ ...errors, [id]: "" });
    setFormData({ ...formData, [id]: value });
  };

  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 5;
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();

    const { email, password, confirmPassword } = formData;
    const emailValid = validateEmail(email);
    const passwordValid = validatePassword(password);

    if (!emailValid) {
      setErrors({ ...errors, email: "Invalid email address" });
      return;
    }

    if (!passwordValid) {
      setErrors({
        ...errors,
        password: "Password must be at least 5 characters long",
      });
      return;
    }

    if (password !== confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match" });
      return;
    }

    setErrors(initialErrors);

    try {
      const response = await fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: formData.name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
      // Handle signup error
    }

    auth.login();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          icon={usericon}
        />
        <Input
          type="email"
          id="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleInputChange}
          errorMessage={errors.email}
          icon={usericon}
        />
        <Input
          type="password"
          id="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
          errorMessage={errors.password}
          icon={keyicon}
        />
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          errorMessage={errors.confirmPassword}
          icon={keyicon}
        />
        <button className="login-button" type="submit">
          Signup
        </button>
      </Form>
      <p>
        Already have an account?{" "}
        <a href="#!" onClick={toggleForm}>
          Log In here
        </a>
      </p>
    </>
  );
};

export default Signup;
