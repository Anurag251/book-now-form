import BookNowPage from "./pages/book-now.page";
import "./assets/styles/styles.sass";
import "./assets/styles/responsive.sass";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import HeaderComponent from "./components/header.component";
import ServicesPage from "./pages/services.page";
import ContactPage from "./pages/contact.page";
import FooterComponent from "./components/footer.component";
import AboutPage from "./pages/about.page";
import HoursModalComponent from "./components/hours-modal.component";
import MaterialModalComponent from "./components/material-modal.component";
import SignInAndSignUpModalComponent from "./components/sign-in-and-sign-up-modal/sign-in-and-sign-up-modal.component";
import { useContext } from "react";
import { BookNowContext } from "./context/book-now/book-now-context";
// import GoogleMapPopupComponent from "./components/google-map-popup.component";

const App = () => {
  const { formValues, message } = useContext(BookNowContext);

  return (
    <div className="App">
      {!formValues.currentUser ? <SignInAndSignUpModalComponent /> : null}

      <p
        className={`allMessage ${message.type} ${
          message.hidden ? "active" : ""
        } `}
      >
        {message.message}
      </p>

      <HeaderComponent />

      <HoursModalComponent />

      <MaterialModalComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/book-now" element={<BookNowPage />} />

        <Route exact path="/services" element={<ServicesPage />} />

        <Route exact path="/contact" element={<ContactPage />} />

        <Route exact path="/about" element={<AboutPage />} />
      </Routes>

      {/* <GoogleMapPopupComponent /> */}

      <FooterComponent />
    </div>
  );
};

export default App;
