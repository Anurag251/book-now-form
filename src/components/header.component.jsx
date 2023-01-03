import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [sticky, setSticky] = useState("");

  const [hidden, setHidden] = useState(false);

  const isHidden = () => setHidden(!hidden);

  useEffect(() => {
    window.onscroll = () => {
      if (scrollY > 10) {
        setSticky("sticky");
      } else {
        setSticky("");
      }
    };
  }, []);

  return (
    <React.Fragment>
      <header className={`${sticky}`}>
        <div className="wrapper">
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>

          <nav>
            <ul className="link-btn-list">
              <li>
                <Link to="/">
                  <button className="link active">Home</button>
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <button className="link">About</button>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <button className="link">Services</button>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <button className="link">Contact</button>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="login-sign-up-btns">
            <Link>
              <button className="login">Login</button>
            </Link>

            <Link>
              <button className="sign-up-btn">Sign Up</button>
            </Link>
          </div>

          <div className="side-nav-btn">
            <button onClick={isHidden}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </header>

      <div className={`side-nav ${hidden ? "active" : ""}`}>
        <div className="side-nav-close-btn" onClick={() => setHidden(false)}>
          <i className="fas fa-arrow-left"></i>
        </div>

        <div className="logo">
          <Link to="/" href="index.html">
            <h3>LOGO</h3>
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className="navLinkBtn">
              <button className="nav-btn">Home</button>
            </Link>
          </li>

          <li>
            <Link to="/about" className="navLinkBtn">
              <button className="nav-btn">About</button>
            </Link>
          </li>

          <li>
            <Link to="/services" className="navLinkBtn">
              <button className="nav-btn">Service</button>
            </Link>
          </li>

          <li>
            <Link to="/contact" className="navLinkBtn">
              <button className="nav-btn">Contact</button>
            </Link>
          </li>
        </ul>

        <div className="login-signup-btns">
          <div className="login-btn">
            <Link to="/login">
              <button className="link">Login</button>
            </Link>
          </div>

          <div className="sign-up-btn">
            <Link to="/sign-up">
              <button className="link">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
