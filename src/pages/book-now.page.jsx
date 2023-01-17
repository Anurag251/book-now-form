import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { apis } from "../apis/apis";
import CheckoutComponent from "../components/checkout.component";
import CustomTitleComponent from "../components/custom-title.component";
import DateAndTimeComponent from "../components/date-time.component";
import FrequencyComponent from "../components/frequency.component";
import LoadingComponent from "../components/loading.component";
import ProgressBarComponent from "../components/progress-bar.component";
import SelectedInformationsComponent from "../components/selected-informations.component";
import ServiceDetailsComponent from "../components/service-details.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const BookNowPage = () => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const location = useLocation();
  // console.log(location.pathname.slice(10));

  const {
    formValues,
    setFormValues,
    services,
    selectedService,
    setSelectedService,

    selectedServices,
    setSelectedServices,

    resetAllBookingData,
  } = useContext(BookNowContext);

  useEffect(() => {
    services.forEach((service) => {
      if (
        service.service_name.replace(" ", "-").toLowerCase() ===
        location.pathname.slice(10)
      ) {
        setSelectedServices(service);
        // console.log(service);
      }
    });
  }, [services]);

  const increment = () => {
    setCurrentPosition(currentPosition + 33.33);
  };

  const decrement = () => {
    setCurrentPosition(currentPosition - 33.33);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // resetAllBookingData();
  }, [currentPosition]);

  useEffect(() => {
    resetAllBookingData();
  }, []);

  // console.log(formValues.currentUser);

  const submitBooking = () => {
    apis.post('/booking', {
    }).then((res) => {
      console.log(res)
    })
  }

  return (
    <div className="book-now-page">
      <div className="wrapper">
        <div className="title-area">
          <CustomTitleComponent title={formValues.title} />
          <ProgressBarComponent currentPosition={currentPosition} />
        </div>

        <main>
          <div className="all-forms">
            {selectedServices !== null ? (
              <div
                className="all-forms-fields"
                style={{
                  transform: `translate(-${currentPosition}%, 0)`,
                  height: `${currentPosition === 0 ? "400px" : "auto"}`,
                }}
              >
                <div className="form-area">
                  <FrequencyComponent
                    currentPosition={currentPosition}
                    frequencyData={selectedService.frequency}
                    frequencyDatas={selectedServices.frequencydetail}
                  />
                </div>

                <div className="form-area">
                  <ServiceDetailsComponent
                    currentPosition={currentPosition}
                    serviceDatas={selectedServices}
                  />
                </div>

                <div className="form-area">
                  <DateAndTimeComponent
                    currentPosition={currentPosition}
                    professionalData={selectedService.professional}
                    professionalDatas={selectedServices.employeedetail}
                  />
                </div>
              </div>
            ) : (
              <LoadingComponent />
            )}

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
              ) : formValues.currentUser ? (
                <CheckoutComponent />
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
