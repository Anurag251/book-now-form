import React, { useEffect } from "react";
import BannerComponent from "../components/banner.component";
import ServiceComponent from "../components/services-component/service.component";
import TestimonialComponent from "../components/testimonial.component";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <BannerComponent />

      <section>
        <ServiceComponent />
      </section>

      <section>
        <TestimonialComponent />
      </section>

    </div>
  );
};

export default HomePage;
