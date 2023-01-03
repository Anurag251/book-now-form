import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import profileImage from "../assets/images/user2.png";
import quotesIcon from "../assets/images/quote.svg";
import TitleComponent from "./title.component";

const TestimonialComponent = () => {
  return (
    <div className="testimonial">
      <div className="wrapper">
        <TitleComponent title="Testimonial" subTitle="What our clients say?" />
        <div className="testimonial-list">
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <div className="item-body">
                  <div className="icon">
                    <img src={quotesIcon} alt="icon" />
                  </div>

                  <p className="user-message">
                    These types of commercial cleaning services involve cleaning
                    work areas, common areas, cubicles, restrooms, kitchens, and
                    reception areas. Tasks will include mopping, dusting,
                    polishing, sanitizing, and waste removal. It is generally
                    recommended because it’s more...
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={profileImage} alt="user" />

                  <div className="details">
                    <div className="name">Moto GP</div>
                    <div className="role">Hello Worlds</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="item-body">
                  <div className="icon">
                    <img src={quotesIcon} alt="icon" />
                  </div>

                  <p className="user-message">
                    These types of commercial cleaning services involve cleaning
                    work areas, common areas, cubicles, restrooms, kitchens, and
                    reception areas. Tasks will include mopping, dusting,
                    polishing, sanitizing, and waste removal. It is generally
                    recommended because it’s more...
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={profileImage} alt="user" />

                  <div className="details">
                    <div className="name">Moto GP</div>
                    <div className="role">Hello Worlds</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="item-body">
                  <div className="icon">
                    <img src={quotesIcon} alt="icon" />
                  </div>

                  <p className="user-message">
                    These types of commercial cleaning services involve cleaning
                    work areas, common areas, cubicles, restrooms, kitchens, and
                    reception areas. Tasks will include mopping, dusting,
                    polishing, sanitizing, and waste removal. It is generally
                    recommended because it’s more...
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={profileImage} alt="user" />

                  <div className="details">
                    <div className="name">Moto GP</div>
                    <div className="role">Hello Worlds</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <div className="item-body">
                  <div className="icon">
                    <img src={quotesIcon} alt="icon" />
                  </div>

                  <p className="user-message">
                    These types of commercial cleaning services involve cleaning
                    work areas, common areas, cubicles, restrooms, kitchens, and
                    reception areas. Tasks will include mopping, dusting,
                    polishing, sanitizing, and waste removal. It is generally
                    recommended because it’s more...
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={profileImage} alt="user" />

                  <div className="details">
                    <div className="name">Moto GP</div>
                    <div className="role">Hello Worlds</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComponent;
