import React, { useContext, useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import ServiceCardComponent from "./service-card.component";
import { BookNowContext } from "../../context/book-now/book-now-context";
import LoadingComponent from "../loading.component";

const ServicesListComponent = () => {
  const { services, loadingPage } = useContext(BookNowContext);
  console.log(services);

  return (
    <div className="services-list">
      {loadingPage ? (
        <LoadingComponent />
      ) : (
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="mySwiper"
        >
          {services.length
            ? services
                .filter(
                  (data) =>
                    data.service_name === "Home Cleaning" ||
                    data.service_name === "Office Cleaning"
                )
                .map((service) => (
                  <SwiperSlide key={service.id}>
                    <ServiceCardComponent service={service} />
                  </SwiperSlide>
                ))
            : "No Data Found"}
        </Swiper>
      )}
    </div>
  );
};

export default ServicesListComponent;
