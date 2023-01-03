import React from "react";
import BannerComponent from "../components/banner.component";
import FooterComponent from "../components/footer.component";
import ServiceComponent from "../components/services-component/service.component";
import TestimonialComponent from "../components/testimonial.component";

const HomePage = () => {
  return (
    <div className="home-page">
      <BannerComponent />

      <section>
        <ServiceComponent />
      </section>

      <section>
        <TestimonialComponent />
      </section>

      <FooterComponent />
    </div>
  );
};

export default HomePage;
