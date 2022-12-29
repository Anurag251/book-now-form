import BookNowPage from "./pages/book-now.page";
import "./assets/styles/styles.sass";
import "./assets/styles/responsive.sass";
// import GoogleMapPopupComponent from "./components/google-map-popup.component";

const App = () => {
  return (
    <div className="App">
      <BookNowPage />

      {/* <GoogleMapPopupComponent /> */}
    </div>
  );
};

export default App;
