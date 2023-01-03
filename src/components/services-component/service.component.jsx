import React from "react";
import TitleComponent from "../title.component";
import ServicesListComponent from "./services-list.component";

const ServiceComponent = () => {
  return (
    <div className="services">
      <div className="wrapper">
        <TitleComponent
          title="Services"
          subTitle="Check out some of our top home services"
        />

        <ServicesListComponent />
      </div>
    </div>
  );
};

export default ServiceComponent;
