import React from "react";

const Input = ({ type, id, placeholder, value, onChange, onBlur, errorMessage, icon }) => {
    return (
        <div>
            <input
                className="form-input"
                type={type}
                id={id}
                autoComplete="on"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                style={{ backgroundImage: `url(${icon})` }}

            ></input>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Input;
