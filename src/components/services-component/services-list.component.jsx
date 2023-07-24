import React, { useContext } from "react";

import "swiper/css";
import "swiper/css/pagination";

import ServiceCardComponent from "./service-card.component";
import { BookNowContext } from "../../context/book-now/book-now-context";
import LoadingComponent from "../loading.component";

const ServicesListComponent = () => {
  const { services, loadingPage } = useContext(BookNowContext);

  return (
    <div className="services-page">
      {loadingPage ? (
        <LoadingComponent />
      ) : (
        <div className="list">
          {services.length
            ? services
                .filter(
                  (data) =>
                    (data.category.category_name === "home_cleaning" &&
                      data.employeedetail.length) ||
                    (data.category.category_name === "office_cleaning" &&
                      data.employeedetail.length) ||
                    (data.category.category_name === "deep_cleaning" &&
                      data.rate.length) ||
                    (data.category.category_name === "sofa_cleaning" &&
                      data.rate.length) ||
                    (data.category.category_name === "carpet_cleaning" &&
                      data.rate.length)
                )
                .map((service) => (
                  <ServiceCardComponent key={service.id} service={service} />
                ))
            : "No Data Found"}
        </div>
      )}
    </div>
  );
};

export default ServicesListComponent;
