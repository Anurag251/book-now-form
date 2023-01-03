import React, { useEffect } from "react";
import ServiceCardComponent from "../components/services-component/service-card.component";
import TitleComponent from "../components/title.component";

const ServicesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page">
      <section>
        <div className="wrapper">
          <TitleComponent
            title="Services"
            subTitle="Check out some of our top home services"
          />

          <div className="list">
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
            <ServiceCardComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
