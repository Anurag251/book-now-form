import React from "react";

const FormInputComponent = ({
  label,
  handleChange,
  textarea,
  ...otherProps
}) => {
  return (
    <div className="form-input-area">
      <div className={`input-sec ${textarea ? "textarea" : ""}`}>
        {!textarea ? (
          <input
            className="form-input"
            id={label}
            onChange={handleChange}
            {...otherProps}
          />
        ) : (
          <textarea
            cols="30"
            rows="10"
            className="form-input"
            id={label}
            onChange={handleChange}
            {...otherProps}
          ></textarea>
        )}

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
