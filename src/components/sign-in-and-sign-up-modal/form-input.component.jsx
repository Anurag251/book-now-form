import React from "react";

const FormInputComponent = ({ label, handleChange, ...otherProps }) => {
  return (
    <div className="form-input-area">
      <div className="input-sec">
        <input
          className="form-input"
          id={label}
          onChange={handleChange}
          {...otherProps}
        />

        <label
          className={`form-input-label ${
            otherProps.value.length ? "shrink" : ""
          }`}
          htmlFor={label}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default FormInputComponent;
