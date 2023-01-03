import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/banner-image.png";
import bannerBg from "../assets/images/banner-bg.png";

const BannerComponent = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="wrapper">
        <div className="banner-content">
          <h1>Professional Cleaning Company in Dubai</h1>

          <p>Available from 8AM to 8PM daily 7 days a week</p>

          <Link to="/book-now">
            <button>Book Now</button>
          </Link>
        </div>

        <div className="image-sec">
          <img src={bannerImage} alt="banner-image" />
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
