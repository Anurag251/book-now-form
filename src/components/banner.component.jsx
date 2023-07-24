import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/images/banner-image.png";
import bannerBg from "../assets/images/Banner-image.jpeg";

const BannerComponent = () => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="wrapper">
        <div className="quick-call">
          <div className="icon">
            <i className="fas fa-phone"></i>
          </div>
          <span>
            <a href="tel:97142692446" target="_blank">
              +97142692446
            </a>
          </span>
        </div>

        <div className="quick-email">
          <div className="icon">
            <i className="fas fa-envelope"></i>
          </div>
          <span>
            <a href="mailto:info@book4clean.com" target="_blank">
              info@book4clean.com
            </a>
          </span>
        </div>

        <div className="quick-whatsapp">
          <div className="icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <span>
            <a
              href="https://api.whatsapp.com/send?phone=971564221815"
              target="_blank"
            >
              +971564221815
            </a>
          </span>
        </div>

        <div className="banner-content">
          <h1>Professional Cleaning Company in Dubai</h1>

          <p>Available from 8AM to 8PM daily 7 days a week</p>

          <Link to="/services">
            <button>Book your maids</button>
          </Link>
        </div>

        <div className="image-sec">
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
