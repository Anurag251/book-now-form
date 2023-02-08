import React, { useEffect, useState } from "react";
import FormInputComponent from "../components/sign-in-and-sign-up-modal/form-input.component";

const ContactPage = () => {
  const [contactFormValues, setContactFormValues] = useState({
    fullName: "",
    email: "",
    contactNo: "",
    subject: "",
    message: "",
  });

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
                  <a href="tel:+97142366008" target="_blank">
                    +97142366008
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
                  Office 218, Al Qiyada Building, Abu Hail, Dubai, UAE
                </li>
              </ul>

              <div className="social-icon">
                <a href="#">
                  <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>

                <a href="https://api.whatsapp.com/send?phone=971564221815" target="_blank">
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
              <form action="">
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
                      type="text"
                      name="contactNo"
                      value={contactFormValues.contactNo}
                      handleChange={handleChange}
                    />

                    <FormInputComponent
                      label="Subject"
                      type="email"
                      name="subject"
                      value={contactFormValues.subject}
                      handleChange={handleChange}
                    />
                  </div>

                  <FormInputComponent
                    label="Message"
                    type="email"
                    name="message"
                    value={contactFormValues.message}
                    handleChange={handleChange}
                    textarea={true}
                  />
                </div>

                <button className="submit-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
