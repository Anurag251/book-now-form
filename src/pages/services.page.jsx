import React, { useContext, useEffect, useState } from "react";
import LoadingComponent from "../components/loading.component";
import ServiceCardComponent from "../components/services-component/service-card.component";
import TitleComponent from "../components/title.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const ServicesPage = () => {
  const { services, loadingPage } = useContext(BookNowContext);

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

          {loadingPage ? (
            <LoadingComponent />
          ) : (
            <div className="list">
              {services.length
                ? services
                    .filter(
                      (data) =>
                        data.service_name === "Home Cleaning" ||
                        data.service_name === "Office Cleaning"
                    )
                    .map((service) => (
                      <ServiceCardComponent
                        key={service.id}
                        service={service}
                      />
                    ))
                : "No Data Found"}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
