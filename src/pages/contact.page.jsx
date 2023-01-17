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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  magnam atque magni esse nostrum illum adipisci impedit commodi
                  facere, quibusdam quasi beatae
                </p>
              </div>

              <ul className="info">
                <li>
                  <div className="icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  +977-987654321
                </li>

                <li>
                  <div className="icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  info@gmail.com
                </li>

                <li>
                  <div className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  Subidanagar, Tinkune, Kathmandu 144000
                </li>
              </ul>

              <div className="social-icon">
                <a href="#">
                  <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </div>
                </a>

                <a href="#">
                  <div className="icon">
                    <i className="fab fa-instagram"></i>
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
