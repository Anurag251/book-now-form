import React from "react";

const CustomInputComponent = ({
  label,
  description,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="custom-input">
      <div className="input-indicator"></div>

      <div className="input-sec">
        <label className="form-input-label" htmlFor={label}>
          {label}
        </label>
        {description ? <p className="description">{description}</p> : null}
      </div>
    </div>
  );
};

export default CustomInputComponent;
