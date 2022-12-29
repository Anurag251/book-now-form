import React, { useContext } from "react";
import {
  Link,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import CustomTitleComponent from "../components/custom-title.component";
import DateAndTimeComponent from "../components/date-time.component";
import FrequencyComponent from "../components/frequency.component";
import ProgressBarComponent from "../components/progress-bar.component";
import SelectedInformationsComponent from "../components/selected-informations.component";
import ServiceDetailsComponent from "../components/service-details.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const BookNowPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { formValues, setFormValues } = useContext(BookNowContext);

  return (
    <div className="book-now-page">
      <div className="wrapper">
        <div className="title-area">
          <CustomTitleComponent title={formValues.title} />
          <ProgressBarComponent />
        </div>

        <main>
          <div className="all-forms">
            <Routes>
              <Route path="/" element={<FrequencyComponent />} />
              <Route
                path="/service-details"
                element={<ServiceDetailsComponent />}
              />

              <Route path="/date-time" element={<DateAndTimeComponent />} />
            </Routes>

            <div className="form-footer">
              {pathname !== "/" ? (
                <button className="previous" onClick={() => navigate(-1)}>
                  <i className="fas fa-arrow-left"></i>
                </button>
              ) : (
                <div className="useless-div" />
              )}

              <div
                className="total-price"
                onClick={() =>
                  setFormValues({ ...formValues, bookingSummaryHidden: true })
                }
              >
                <div className="name">Total</div>
                <div className="value">
                  AED 100
                  <i className="fas fa-chevron-up"></i>
                </div>
              </div>

              {pathname === "/" ? (
                <Link to="/service-details">
                  <button className="next">Next</button>
                </Link>
              ) : pathname === "/service-details" ? (
                <Link to="/date-time">
                  <button className="next">Next</button>
                </Link>
              ) : (
                <button className="next" disabled>
                  Next
                </button>
              )}
            </div>
          </div>

          <SelectedInformationsComponent />
        </main>
      </div>
    </div>
  );
};

export default BookNowPage;
