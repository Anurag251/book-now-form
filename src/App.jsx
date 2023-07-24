import BookNowPage from "./pages/book-now.page";
import "./assets/styles/styles.sass";
import "./assets/styles/responsive.sass";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/home.page";
import HeaderComponent from "./components/header.component";
import ServicesPage from "./pages/services.page";
import ContactPage from "./pages/contact.page";
import FooterComponent from "./components/footer.component";
import AboutPage from "./pages/about.page";
import HoursModalComponent from "./components/hours-modal.component";
import MaterialModalComponent from "./components/material-modal.component";
import SignInAndSignUpModalComponent from "./components/sign-in-and-sign-up-modal/sign-in-and-sign-up-modal.component";
import { useContext, useEffect, useState } from "react";
import { BookNowContext } from "./context/book-now/book-now-context";
import WorkFlowPage from "./pages/work-flow.page";
import GoogleMapPopupComponent from "./components/google-maps/google-map-popup.component";
import BookingSummeryComponent from "./components/booking-summery.component";
import TestimonialPage from "./pages/testimonial.page";

const App = () => {
  const [hideComponent, setHideComponent] = useState(false);
  const { formValues, message, setMessage } = useContext(BookNowContext);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.slice(1, 9) === "book-now") {
      setHideComponent(true);
    } else {
      setHideComponent(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.search === "?payment=success") {
      setMessage({
        ...message,
        hidden: true,
        type: "success",
        message: `Dear Customer, Thank you for your payment for book4clean services. Your payment has been processed, and you will soon received your booking confirmation on email. 
        We appreciate your business and your loyalty!`,
      });

      setTimeout(() => {
        setMessage({
          ...message,
          hidden: false,
          type: "",
          message: "",
        });
      }, 10000);
    }
  }, []);

  return (
    <div className="App">
      <SignInAndSignUpModalComponent />

      <BookingSummeryComponent />

      <p
        className={`allMessage ${message.type} ${
          message.hidden ? "active" : ""
        } `}
      >
        {message.message}
      </p>

      {hideComponent ? null : <HeaderComponent />}
      <HoursModalComponent />
      <MaterialModalComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/book-now/:id" element={<BookNowPage />} />

        <Route exact path="/services" element={<ServicesPage />} />

        <Route exact path="/contact" element={<ContactPage />} />

        <Route exact path="/about" element={<AboutPage />} />

        <Route exact path="/work-flow" element={<WorkFlowPage />} />

        <Route exact path="/testimonial" element={<TestimonialPage />} />

        <Route exact path="/success" element={<h2>Success</h2>} />

        <Route exact path="/cancel" element={<h2>Error</h2>} />
      </Routes>

      <GoogleMapPopupComponent />
      {hideComponent ? null : <FooterComponent />}
    </div>
  );
};

export default App;
