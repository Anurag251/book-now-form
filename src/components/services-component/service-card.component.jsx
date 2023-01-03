import React from "react";

import service1 from "../../assets/images/service1.png";
import service2 from "../../assets/images/service2.png";
import service3 from "../../assets/images/service3.png";
import service4 from "../../assets/images/service4.png";

const ServiceCardComponent = () => {
  return (
    <div className="services-card">
      <div className="icon">
        <img src={service1} alt="service-icon" />
      </div>

      <h4 className="card-title">Maids Services</h4>

      <p className="desc">
        A service that involves general house cleaning jobs. Your list of house
        cleaning services can include areas like the kitchen, lounge, bathroom,
        and bedroom.
      </p>
    </div>
  );
};

export default ServiceCardComponent;
