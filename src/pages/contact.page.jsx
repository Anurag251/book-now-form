import React, { useContext, useEffect, useState } from "react";
import { apis } from "../apis/apis";
import FormInputComponent from "../components/sign-in-and-sign-up-modal/form-input.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const ContactPage = () => {
  const { message, setMessage, removerMessage, formValues, setFormValues } =
    useContext(BookNowContext);
  const [contactFormValues, setContactFormValues] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });

  const validateContact = (e) => {
    e.preventDefault();
    if (
      contactFormValues.fullName !== "" &&
      contactFormValues.email !== "" &&
      contactFormValues.subject !== "" &&
      contactFormValues.message !== ""
    ) {
      setFormValues({
        ...formValues,
        buttonLoading: true,
      });

      apis
        .post("/send/message", {
          name: contactFormValues.fullName,
          email: contactFormValues.email,
          subject: contactFormValues.subject,
          phone: contactFormValues.contactNo,
          message: contactFormValues.message,
        })
        .then((res) => {
          if (res.status === 200) {
            setFormValues({
              ...formValues,

              buttonLoading: false,
            });

            setMessage({
              ...message,
              hidden: true,
              type: "success",
              message: "Your message is sent to our company",
            });

            setContactFormValues({
              ...contactFormValues,
              fullName: "",
              email: "",
              contactNo: "",
              subject: "",
              message: "",
            });

            setTimeout(() => {
              removerMessage();
            }, 6000);
          }
        })
        .catch((err) => {
          setMessage({
            ...message,
            hidden: true,
            type: "error",
            message: "Something went wrong",
          });

          setFormValues({
            ...formValues,

            buttonLoading: false,
          });

          setTimeout(() => {
            removerMessage();
          }, 4000);
        });
    } else {
      setMessage({
        ...message,
        hidden: true,
        type: "error",
        message: "All fields are required",
      });

      setTimeout(() => {
        removerMessage();
      }, 3000);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setContactFormValues({ ...contactFormValues, [name]: value });
  };

  return (
    <div className="contact-page">
      <section>
        <div className="wrapper">
          <div className="title">
            <h5>Contact</h5>
            <h2>Get In Touch</h2>
          </div>

          <div className="contact-sec">
            <div className="contact-info">
              <div>
                <h3>Let's Talk</h3>
                <p>
                  Share your valuable message, proposal or comment to enhance
                  our experience. We are always positive to hear from you. We’d
                  love to discuss on any services and bookings.
                </p>
              </div>

              <ul className="info">
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <a href="tel:+97142692446" target="_blank">
                    +97142692446
                  </a>
                </li>

                <li>
                  <div className="icon">
                    <i className="fas fa-mobile"></i>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=971564221815`}
                    target="blank"
                  >
                    +971564221815 (whatsapp)
                  </a>
                </li>

                <li className="email-link">
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="all-emails">
                    <a href="mailto:info@book4clean.com" target="_blank">
                      info@book4clean.com
                    </a>
                    <span>|</span>
                    <a href="mailto:book4clean@gmail.com" target="_blank">
                      book4clean@gmail.com
                    </a>
                  </div>
                </li>

                <li>
                  <div className="icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <a href="https://www.book4clean.com/" target="_blank">
                    www.book4clean.com
                  </a>
                </li>

                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  Office B12, Block B, Resid 1072, Al Muteena, Deira, Dubai, UAE
                </li>
              </ul>

              <div className="social-icon">
                <a href="#">
                  <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>

                <a
                  href="https://api.whatsapp.com/send?phone=971564221815"
                  target="_blank"
                >
                  <div className="icon">
                    <i className="fab fa-whatsapp"></i>
                  </div>
                </a>

                <a href="#">
                  <div className="icon">
                    <i className="fab fa-twitter"></i>
                  </div>
                </a>

                <a href="#">
                  <div className="icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                </a>
              </div>
            </div>

            <div className="contact-form">
              <form action="" onSubmit={validateContact}>
                <div className="form-area">
                  <div className="groups">
                    <FormInputComponent
                      label="Full Name"
                      type="text"
                      name="fullName"
                      value={contactFormValues.fullName}
                      handleChange={handleChange}
                    />

                    <FormInputComponent
                      label="Email"
                      type="email"
                      name="email"
                      value={contactFormValues.email}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="groups">
                    <FormInputComponent
                      label="Contact Number"
                      type="number"
                      name="contactNo"
                      value={contactFormValues.contactNo}
                      handleChange={handleChange}
                    />

                    <FormInputComponent
                      label="Subject"
                      type="text"
                      name="subject"
                      value={contactFormValues.subject}
                      handleChange={handleChange}
                    />
                  </div>

                  <FormInputComponent
                    label="Message"
                    type="text"
                    name="message"
                    value={contactFormValues.message}
                    handleChange={handleChange}
                    textarea={true}
                  />
                </div>

                <button
                  className={`form-submit-btn ${
                    formValues.buttonLoading ? "loading" : ""
                  }`}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
