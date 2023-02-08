import React from "react";
import { useState } from "react";

const FormInputComponent = ({
  label,
  handleChange,
  textarea,
  password,
  ...otherProps
}) => {
  const [passwordHidden, setPasswordHidden] = useState(false);

  const toggle = () => setPasswordHidden(!passwordHidden);

  return (
    <div className="form-input-area">
      <div className={`input-sec ${textarea ? "textarea" : ""}`}>
        {!textarea ? (
          password ? (
            <input
              className="form-input"
              id={label}
              onChange={handleChange}
              {...otherProps}
              type={`${passwordHidden ? "text" : "password"}`}
            />
          ) : (
            <input
              className="form-input"
              id={label}
              onChange={handleChange}
              {...otherProps}
            />
          )
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

        {password ? (
          <div
            className={`hide-password ${passwordHidden ? "active" : ""}`}
            onClick={toggle}
          >
            <div className="toggleHide">
              <i className="fas fa-eye-slash"></i>
              <i className="fas fa-eye"></i>
            </div>
          </div>
        ) : null}

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
