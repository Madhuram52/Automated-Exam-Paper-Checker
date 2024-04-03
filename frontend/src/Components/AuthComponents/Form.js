import React from "react";
// import Input from "./input";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit} className="main-form">{children}</form>;
};

export default Form;
