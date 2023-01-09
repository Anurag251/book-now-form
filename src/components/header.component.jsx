import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookNowContext } from "../context/book-now/book-now-context";

const HeaderComponent = () => {
  const [sticky, setSticky] = useState("");

  const [hidden, setHidden] = useState(false);

  const { formValues, setFormValues, message, setMessage } =
    useContext(BookNowContext);

  const isHidden = () => setHidden(!hidden);

  const location = useLocation();

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
                  <button
                    className={`link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    onClick={() =>
                      setFormValues({ ...formValues, currentPath: "/" })
                    }
                  >
                    Home
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <button
                    className={`link ${
                      location.pathname === "/about" ? "active" : ""
                    }`}
                    onClick={() =>
                      setFormValues({ ...formValues, currentPath: "/about" })
                    }
                  >
                    About
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <button
                    className={`link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    onClick={() =>
                      setFormValues({ ...formValues, currentPath: "/services" })
                    }
                  >
                    Services
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <button
                    className={`link ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    onClick={() =>
                      setFormValues({ ...formValues, currentPath: "/contact" })
                    }
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="login-sign-up-btns">
            {formValues.currentUser ? (
              <button
                className="sign-up-btn"
                onClick={() => {
                  localStorage.removeItem("token");
                  setFormValues({
                    ...formValues,
                    currentUser: false,
                  });

                  setMessage({
                    ...message,
                    hidden: true,
                    type: "success",
                    message: "Your Are Sign Out",
                  });

                  setTimeout(() => {
                    setMessage({
                      ...message,
                      hidden: false,
                      type: "",
                      message: "",
                    });
                  }, 4000);
                }}
              >
                Sign Out
              </button>
            ) : (
              <React.Fragment>
                <button
                  className="login"
                  onClick={() => {
                    setFormValues({
                      ...formValues,
                      signInSignUpModal: true,
                      isSignIn: true,
                    });
                  }}
                >
                  Login
                </button>

                <button
                  className="sign-up-btn"
                  onClick={() => {
                    setFormValues({
                      ...formValues,
                      signInSignUpModal: true,
                      isSignIn: false,
                    });
                  }}
                >
                  Sign Up
                </button>
              </React.Fragment>
            )}
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
            <Link
              to="/"
              className={`navLinkBtn ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <button
                className="nav-btn"
                onClick={() =>
                  setFormValues({ ...formValues, currentPath: "/" })
                }
              >
                Home
              </button>
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`navLinkBtn ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <button
                className="nav-btn"
                onClick={() =>
                  setFormValues({ ...formValues, currentPath: "/about" })
                }
              >
                About
              </button>
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={`navLinkBtn ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              <button
                className="nav-btn"
                onClick={() =>
                  setFormValues({ ...formValues, currentPath: "/services" })
                }
              >
                Service
              </button>
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={`navLinkBtn ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <button
                className="nav-btn"
                onClick={() =>
                  setFormValues({ ...formValues, currentPath: "/contact" })
                }
              >
                Contact
              </button>
            </Link>
          </li>
        </ul>

        <div className="login-signup-btns">
          <div className="login-btn">
            <button
              className="link"
              onClick={() => {
                setFormValues({
                  ...formValues,
                  signInSignUpModal: true,
                  isSignIn: true,
                });
              }}
            >
              Login
            </button>
          </div>

          <div className="sign-up-btn">
            <button
              className="link"
              onClick={() => {
                setFormValues({
                  ...formValues,
                  signInSignUpModal: true,
                  isSignIn: false,
                });
              }}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
