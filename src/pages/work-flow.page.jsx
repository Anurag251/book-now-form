import React from "react";
import TitleComponent from "../components/title.component";

const WorkFlowPage = () => {
  const image1 = "https://cdn-icons-png.flaticon.com/512/5728/5728078.png";
  const image2 = "https://cdn-icons-png.flaticon.com/512/5511/5511414.png";
  const image3 = "https://cdn-icons-png.flaticon.com/512/3190/3190463.png";
  const image4 = "https://cdn-icons-png.flaticon.com/512/3048/3048356.png";

  return (
    <section>
      <div className="wrapper">
        <div className="work-flow">
          <TitleComponent
            title="HOW IT WORKS?"
            subTitle="Our Booking System Working Flow"
          />

          <div className="inner">
            <div className="line">
              <div className="dot"></div>
            </div>
            <div className="process">
              <div className="icon">
                <img src={image1} alt="icon" />
              </div>
              <h2>Sign Up or Login with your detail information.</h2>
            </div>

            <div className="process">
              <div className="icon">
                <img src={image2} alt="icon" />
              </div>
              <h2>
                Book your required service online, mention your appropriate
                location, date-time and no. of cleaners required (Mention your
                instruction for cleaners, if required)
              </h2>
            </div>

            <div className="process">
              <div className="icon">
                <img src={image3} alt="icon" />
              </div>
              <h2>Checkout with payment method or leave for cash payment.</h2>
            </div>

            <div className="process">
              <div className="icon">
                <img src={image4} alt="icon" />
              </div>
              <h2>Enjoy time for yourself</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkFlowPage;
