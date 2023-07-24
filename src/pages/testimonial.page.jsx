import React, { useEffect } from "react";
import TestimonialComponent from "../components/testimonial.component";

const TestimonialPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section>
        <div className="wrapper">
          <TestimonialComponent />
        </div>
      </section>
    </div>
  );
};

export default TestimonialPage;
