import React from "react";
import { Link, useNavigate } from "react-router-dom";

const CustomTitleComponent = ({ title }) => {
  const navigate = useNavigate();
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
