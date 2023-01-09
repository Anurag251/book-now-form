import React from "react";
import { Link } from "react-router-dom";

const ServiceCardComponent = ({ service }) => {
  return (
    <Link to="/book-now">
      <div className="services-card">
        <div className="icon">
          <img
            src={service.image ? `public/${service.image.medium_image}` : null}
            alt="service-icon"
          />
        </div>

        <h4 className="card-title">{service.service_name}</h4>

        <p className="desc">{service.description}</p>
      </div>
    </Link>
  );
};

export default ServiceCardComponent;
