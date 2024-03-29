import React from "react";

const FooterComponent = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-content-list">
          <div className="item">
            <div className="logo">LOGO</div>

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
                <button>About Us</button>
              </li>

              <li>
                <button>Services</button>
              </li>

              <li>
                <button>Testimonials</button>
              </li>

              <li>
                <button>Contact</button>
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
