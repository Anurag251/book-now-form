import React from "react";
import { useNavigate } from "react-router-dom";

const CustomTitleComponent = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className="booking-form-title">
      <button className="home-button" onClick={() => navigate(-1)}>
        <i className="fas fa-arrow-left"></i>
      </button>

      <h2 className="form-page-title">{title}</h2>
    </div>
  );
};

export default CustomTitleComponent;
