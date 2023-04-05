import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookNowContext } from "../context/book-now/book-now-context";
import logoImage from "../assets/images/BOOK4CLEAN-LOGO.svg";
import logoLightImage from "../assets/images/BOOK4CLEAN-LOGO-WHITE.svg";

const HeaderComponent = () => {
  const [sticky, setSticky] = useState("");

  const [hidden, setHidden] = useState(false);

  const { formValues, setFormValues, message, setMessage, currentUserDatails } =
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
        <div className={`wrapper ${!formValues.currentUser ? "no-user" : ""}`}>
          <div className="logo">
            <Link to="/">
              <img className="logo-img" src={logoImage} alt="logo" />
            </Link>
          </div>

          <nav>
            <ul className="link-btn-list">
              <li>
                <Link to="/">
                  <button
                    className={`link ${
                      location.pathname === "/" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormValues({
                        ...formValues,

                        currentPath: "/",
                      });
                    }}
                  >
                    Home
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <button
                    className={`link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormValues({
                        ...formValues,

                        currentPath: "/services",
                      });
                    }}
                  >
                    Services
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/work-flow">
                  <button
                    className={`link ${
                      location.pathname === "/work-flow" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormValues({
                        ...formValues,

                        currentPath: "/work-flow",
                      });
                    }}
                  >
                    How It Works
                  </button>
                </Link>
              </li>

              <li>
                <Link to="/contact">
                  <button
                    className={`link ${
                      location.pathname === "/contact" ? "active" : ""
                    }`}
                    onClick={() => {
                      setFormValues({
                        ...formValues,

                        currentPath: "/contact",
                      });
                    }}
                  >
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          {formValues.currentUser ? (
            <React.Fragment>
              {currentUserDatails !== null &&
              currentUserDatails !== undefined ? (
                <div className="login-sign-up-btns">
                  <div className="userProfile">
                    <div className="username">
                      <div className="greeting">Hello</div>
                      <div className="name">
                        {currentUserDatails.first_name}
                      </div>
                    </div>

                    <div className="user-image">
                      {currentUserDatails.first_name
                        ? currentUserDatails.first_name.charAt(0)
                        : null}
                    </div>

                    <div className="drop-box">
                      <ul>
                        <li onClick={isHidden}>
                          <i className="fas fa-bars"></i>
                          Menu
                        </li>

                        <li
                          onClick={() => {
                            setFormValues({
                              ...formValues,
                              signInSignUpModal: true,
                              isSignIn: "ProfileEdit",
                            });
                          }}
                        >
                          <i className="fas fa-edit"></i>
                          Edit Profile
                        </li>

                        <li
                          onClick={() => {
                            setFormValues({
                              ...formValues,
                              signInSignUpModal: true,
                              isSignIn: "ChangePassword",
                            });
                          }}
                        >
                          <i className="fas fa-key"></i>
                          Password
                        </li>

                        <li
                          onClick={() => {
                            sessionStorage.removeItem("token");
                            setFormValues({
                              ...formValues,
                              token: "",
                              currentUser: false,
                            });

                            setMessage({
                              ...message,
                              hidden: true,
                              type: "success",
                              message: "You Are Sign Out",
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
                          <i className="fa-solid fa-right-from-bracket"></i>
                          Logout
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ) : (
                "Loading..."
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="login-sign-up-btns">
                <button
                  className="login"
                  onClick={() => {
                    setFormValues({
                      ...formValues,
                      signInSignUpModal: true,
                      isSignIn: "Login",
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
                      isSignIn: "Register",
                    });
                  }}
                >
                  Sign Up
                </button>
              </div>

              <div className="side-nav-btn">
                <button onClick={isHidden}>
                  <i className="fas fa-bars"></i>
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </header>

      <div className={`side-nav ${hidden ? "active" : ""}`}>
        <div className="side-nav-close-btn" onClick={() => setHidden(false)}>
          <i className="fas fa-arrow-left"></i>
        </div>

        <div className="logo">
          <Link to="/">
            <img className="logo-img" src={logoLightImage} alt="logo" />
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
                onClick={() => {
                  setHidden(false);
                  setFormValues({ ...formValues, currentPath: "/" });
                }}
              >
                Home
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
                onClick={() => {
                  setHidden(false);
                  setFormValues({ ...formValues, currentPath: "/services" });
                }}
              >
                Service
              </button>
            </Link>
          </li>

          <li>
            <Link
              to="/work-flow"
              className={`navLinkBtn ${
                location.pathname === "/work-flow" ? "active" : ""
              }`}
            >
              <button
                className="nav-btn"
                onClick={() => {
                  setHidden(false);
                  setFormValues({ ...formValues, currentPath: "/work-flow" });
                }}
              >
                How It Works
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
                onClick={() => {
                  setHidden(false);
                  setFormValues({ ...formValues, currentPath: "/contact" });
                }}
              >
                Contact
              </button>
            </Link>
          </li>
        </ul>

        <div className="login-signup-btns">
          {formValues.currentUser ? (
            <div className="login-btn">
              <button
                className="link"
                onClick={() => {
                  setHidden(false);

                  sessionStorage.removeItem("token");
                  setFormValues({
                    ...formValues,
                    token: "",
                    currentUser: false,
                  });

                  setMessage({
                    ...message,
                    hidden: true,
                    type: "success",
                    message: "You Are Sign Out",
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
            </div>
          ) : (
            <React.Fragment>
              <div className="login-btn">
                <button
                  className="link"
                  onClick={() => {
                    setHidden(false);

                    setFormValues({
                      ...formValues,
                      signInSignUpModal: true,
                      isSignIn: "Login",
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
                    setHidden(false);

                    setFormValues({
                      ...formValues,
                      signInSignUpModal: true,
                      isSignIn: "Register",
                    });
                  }}
                >
                  Sign up
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
