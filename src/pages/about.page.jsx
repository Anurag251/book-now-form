import React, { useEffect } from "react";
import aboutImage from "../assets/images/banner-image.png";
import TitleComponent from "../components/title.component";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="wrapper">
        <div className="about-page">
          <div className="image">
            <img src={aboutImage} alt="" />
          </div>

          <div className="details">
            <TitleComponent
              title="WE SAVE YOUR PRECIOUS TIME"
              subTitle="WELCOME TO BOOK4CLEAN"
              aboutpage={true}
            />

            <p>
              BOOK4CLEAN is an online portal which helps individual/resident to
              make their life more comfortable in fact simple and easier. Every
              individual can book online for cleaning services as per their
              particular requirement. “JUST AN INSTRUCTION AWAY TO SET YOUR
              REQUIREMENT DONE”
            </p>
            <h4>Our Vision</h4>
            <p>
              “Input of your requirement and we provide you an excellence
              service” Our vision to make life comfort, effortless and
              trouble-free with Professional, Satisfaction & Competitive Price.
              “Reflection in town, Reliable Service Provider”
            </p>
            <h4>Our Mission</h4>
            <ul>
              <li>To provide excellence service to the customers.</li>
              <li>
                To become a prompt respond service provider to the customers in
                the market.
              </li>
              <li>
                To serve with an excellence service provider for the requirement
                of customer.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
