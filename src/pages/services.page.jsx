import React, { useEffect, useState } from "react";
import ServiceCardComponent from "../components/services-component/service-card.component";
import TitleComponent from "../components/title.component";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("https://stnepal.com.np/sherpatech/api/v1/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data.service_details));
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
            {services.length
              ? services.map((service) => (
                  <ServiceCardComponent key={service.id} service={service} />
                ))
              : null}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
