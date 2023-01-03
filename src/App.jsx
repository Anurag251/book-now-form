import BookNowPage from "./pages/book-now.page";
import "./assets/styles/styles.sass";
import "./assets/styles/responsive.sass";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.page";
import HeaderComponent from "./components/header.component";
import ServicesPage from "./pages/services.page";
import ContactPage from "./pages/contact.page";
import FooterComponent from "./components/footer.component";
// import GoogleMapPopupComponent from "./components/google-map-popup.component";

const App = () => {
  return (
    <div className="App">
      <HeaderComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route exact path="/book-now" element={<BookNowPage />} />

        <Route exact path="/services" element={<ServicesPage />} />

        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>

      {/* <GoogleMapPopupComponent /> */}

      <FooterComponent />
    </div>
  );
};

export default App;
