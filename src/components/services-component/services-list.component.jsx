import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import ServiceCardComponent from "./service-card.component";

const ServicesListComponent = () => {
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
        <SwiperSlide>
          <ServiceCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCardComponent />
        </SwiperSlide>

        <SwiperSlide>
          <ServiceCardComponent />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServicesListComponent;
