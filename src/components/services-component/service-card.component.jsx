import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ServiceCardComponent = ({ service }) => {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const image =
    "https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div
      className="services-card"
      onClick={() => {
        navigate(
          `/book-now/${service.service_name.replace(" ", "-").toLowerCase()}`
        );
      }}
    >
      <div className="icon">
        <img
          src={service.image ? `public/${service.image.medium_image}` : image}
          alt="service-icon"
        />
      </div>

      <h4 className="card-title">{service.service_name}</h4>

      <p className="desc">{service.description}</p>
    </div>
  );
};

export default ServiceCardComponent;
