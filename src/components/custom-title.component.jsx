import React from "react";
import { Link } from "react-router-dom";

const CustomTitleComponent = ({ title }) => {
  return (
    <div className="booking-form-title">
      <Link to="/">
        <button className="home-button">
          <i className="fas fa-home"></i>
        </button>
      </Link>

      <h2 className="form-page-title">{title}</h2>
    </div>
  );
};

export default CustomTitleComponent;
