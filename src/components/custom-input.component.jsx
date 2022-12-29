import React from "react";

const CustomInputComponent = ({
  label,
  description,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="custom-input">
      <div className="input-sec">
        <input
          className="form-input"
          id={label}
          onChange={handleChange}
          {...otherProps}
        />
        <label className="form-input-label" htmlFor={label}>
          {label}
        </label>
      </div>
      {description ? <p className="description">{description}</p> : null}
    </div>
  );
};

export default CustomInputComponent;
