import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/images/BOOK4CLEAN-LOGO.svg";

const FooterComponent = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content-list">
          <div className="item">
            <div className="logo">
              <Link to="/">
                <img className="logo-img" src={logoImage} alt="logo" />
              </Link>
            </div>

            <div className="social-media">
              <div className="footer-title">Follow Us</div>

              <ul className="social-media-links">
                <li>
                  <button>
                    <i className="fab fa-facebook-f"></i>
                  </button>
                </li>

                <li>
                  <button>
                    <i className="fab fa-twitter"></i>
                  </button>
                </li>

                <li>
                  <button>
                    <i className="fab fa-linkedin"></i>
                  </button>
                </li>

                <li>
                  <button>
                    <i className="fab fa-youtube"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <ul className="other-links">
              <li className="footer-title">Company</li>
              <li>
                <Link to="/about">
                  <button>About Us</button>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <button>Services</button>
                </Link>
              </li>

              <li>
                <Link to="/#sectionTestimonial">
                  <button>Testimonials</button>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <button>Contact</button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="item">
            <ul className="other-links">
              <li className="footer-title">Support</li>
              <li>
                <button>Support Career</button>
              </li>

              <li>
                <button>24h Service</button>
              </li>

              <li>
                <button>Quick Chat</button>
              </li>
            </ul>
          </div>

          <div className="item">
            <ul className="other-links">
              <li className="footer-title">About</li>
              <li>
                <button>Privacy</button>
              </li>

              <li>
                <button>Security</button>
              </li>

              <li>
                <button>Company</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="copy-right">Copyright © 2023 All rights reserved.</div>
      </div>
    </footer>
  );
};

export default FooterComponent;
