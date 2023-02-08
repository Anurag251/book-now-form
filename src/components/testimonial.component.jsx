import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import profileImage from "../assets/images/default-profile.jpeg";
import quotesIcon from "../assets/images/quote.svg";
import TitleComponent from "./title.component";

import image1 from "../assets/images/_DSC2718-1.jpg";
import image2 from "../assets/images/WhatsApp Image 2023-01-03 at 9.28.42 PM.jpeg";
import image3 from "../assets/images/IMG_5632a.jpg";
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
                    The service we receive from BOOK4CLEAN is fantastic! We
                    would absolutely recommend them – a brilliant cleaning
                    company.
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image1} alt="user" />

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
                    We are really happy with the cleaning services provided. Not
                    only office is clean, tidy and well managed but cleaner
                    keeps an eye on things for us, letting us know of any
                    breakages or leaks. Thank You.
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image2} alt="user" />

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
                    We are very satisfied. We have never had such a positive
                    cleaning team around the office, especially with our
                    previous office cleaners.
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image3} alt="user" />

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
                    We are happy with their consistently high standard of
                    service. We happily recommend their services to any firm or
                    individual considering them for cleaning services.
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
                    Sabina is an amazing cleaning. Our house was spotless and
                    smelled so amazing when I finally got home after a long day.
                    She even dealed with my crazy dog and my two cats. Thank you
                    so much dear!
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image1} alt="user" />

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
                    Never had my house cleaned before but these folks made it
                    like a dream. Came home and was amazed at how spotless
                    everything was. The whole process was so easy, they really
                    helped me out when I was needing it. Good value!
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image2} alt="user" />

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
                    I trust them whether I can be on-site or not. I highly
                    recommend this company for residential cleaning.
                  </p>
                </div>

                <div className="item-footer">
                  <img className="user-image" src={image3} alt="user" />

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
                    She did a wonderful through job.
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
