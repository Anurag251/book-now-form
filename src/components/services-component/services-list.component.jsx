import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import ServiceCardComponent from "./service-card.component";

const ServicesListComponent = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://stnepal.com.np/sherpatech/api/v1/services")
      .then((res) => res.json())
      .then((data) => setServices(data.data.service_details));
  }, []);

  return (
    <div className="services-list">
      <Swiper
        slidesPerView={1}
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
          ? services.map((service) => (
              <SwiperSlide key={service.id}>
                <ServiceCardComponent service={service} />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </div>
  );
};

export default ServicesListComponent;
