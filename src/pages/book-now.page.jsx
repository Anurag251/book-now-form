import React, { useContext, useEffect, useState } from "react";
import { Link, Route, useLocation, useNavigate } from "react-router-dom";
import CustomTitleComponent from "../components/custom-title.component";
import DateAndTimeComponent from "../components/date-time.component";
import FrequencyComponent from "../components/frequency.component";
import ProgressBarComponent from "../components/progress-bar.component";
import SelectedInformationsComponent from "../components/selected-informations.component";
import ServiceDetailsComponent from "../components/service-details.component";
import SignInAndSignUpModalComponent from "../components/sign-in-and-sign-up-modal/sign-in-and-sign-up-modal.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const BookNowPage = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const { formValues, setFormValues } = useContext(BookNowContext);

  const increment = () => {
    setCurrentPosition(currentPosition + 33.33);
  };

  const decrement = () => {
    setCurrentPosition(currentPosition - 33.33);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPosition]);

  return (
    <div className="book-now-page">
      {formValues.currentUser === "" ? <SignInAndSignUpModalComponent /> : null}

      <div className="wrapper">
        <div className="title-area">
          <CustomTitleComponent title={formValues.title} />
          <ProgressBarComponent currentPosition={currentPosition} />
        </div>

        <main>
          <div className="all-forms">
            <div
              className="all-forms-fields"
              style={{ transform: `translate(-${currentPosition}%, 0)` }}
            >
              <div className="form-area">
                <FrequencyComponent currentPosition={currentPosition} />
              </div>

              <div className="form-area">
                <ServiceDetailsComponent currentPosition={currentPosition} />
              </div>

              <div className="form-area">
                <DateAndTimeComponent currentPosition={currentPosition} />
              </div>
            </div>

            <div className="form-footer">
              {currentPosition ? (
                <button className="previous" onClick={decrement}>
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
                  AED {formValues.totalPrice - formValues.frequency.discount}
                  <i className="fas fa-chevron-up"></i>
                </div>
              </div>

              {currentPosition < 66.66 ? (
                <button className="next" onClick={increment}>
                  Next
                </button>
              ) : (
                <button
                  className="next"
                  onClick={() =>
                    setFormValues({ ...formValues, signInSignUpModal: true })
                  }
                >
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
