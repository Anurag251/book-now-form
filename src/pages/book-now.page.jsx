import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apis } from "../apis/apis";
import CustomTitleComponent from "../components/custom-title.component";
import DateAndTimeComponent from "../components/date-time.component";
import FrequencyComponent from "../components/frequency.component";
import LoadingComponent from "../components/loading.component";
import ProgressBarComponent from "../components/progress-bar.component";
import SelectedInformationsComponent from "../components/selected-informations.component";
import ServiceDetailsComponent from "../components/service-details.component";
import SinglePageFormComponent from "../components/single-page-form.component";
import { BookNowContext } from "../context/book-now/book-now-context";

const BookNowPage = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardPay, setCardPay] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    formValues,
    setFormValues,
    services,

    selectedServices,
    setSelectedServices,

    message,
    setMessage,
  } = useContext(BookNowContext);

  console.log(selectedServices);

  useEffect(() => {
    services.forEach((service) => {
      if (
        service.service_name.replace(" ", "-").toLowerCase() ===
        location.pathname.slice(10)
      ) {
        setSelectedServices(service);

        if (formValues.layout === "home_cleaning") {
          if (service.rate.length) {
            setFormValues({
              ...formValues,
              price: parseInt(service.rate[0].value),
              discount: 0,

              perHours: parseInt(service.rate[1].value),
              perPerson: parseInt(service.rate[2].value),
              hourDiscount: parseInt(service.rate[3].value),
              hourDiscountStart: parseInt(service.rate[4].value),

              materialPrice: parseInt(service.rate[5].value),
              materialPerHour: parseInt(service.rate[6].value),
              materialsCharge: parseInt(service.rate[7].value),
              materialsChargeStart: parseInt(service.rate[8].value),

              professionalDiscount: 0,
              // professionalDiscount:
              //   service.professionaldiscount !== null
              //     ? service.professionaldiscount
              //     : 0,
              professionalDiscountStart: 1,
              // professionalDiscountStart:
              //   service.professionaldiscountstart !== null
              //     ? service.professionaldiscountstart
              //     : 0,
            });
          }
        }
      }
    });
  }, [services]);

  // console.log(formValues);

  const increment = () => {
    setCurrentPosition(currentPosition + 33.33);
  };

  const decrement = () => {
    setCurrentPosition(currentPosition - 33.33);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPosition]);

  const submitBooking = (e) => {
    setFormValues({
      ...formValues,
      buttonLoading: true,
    });

    try {
      apis
        .post("/booking", {
          service_id: selectedServices.id,
          frequency_id: formValues.frequency.id,
          address: formValues.address,
          // location: formValues.apartmentDetails,
          working_hours: formValues.hours,
          professional: formValues.noOfProfessional,
          cleaning_materials: formValues.materialPrice,
          cleaning_instruction: formValues.message,
          employee_id: formValues.professional.id,
          service_date: "2023-02-02",
          service_time: formValues.time,
          // client_id: sessionStorage.getItem("token"),
          total_price: formValues.totalPrice,
        })
        .then((res) => {
          if (res.status === 200) {
            setFormValues({
              ...formValues,
              buttonLoading: false,
            });
            // if (e === true) {
            window.location = res.data.url;
            setMessage({
              ...message,
              hidden: true,
              type: "success",
              message: "Your Checkout is success",
            });
            // }
            // else {
            //   navigate("/");
            //   setMessage({
            //     ...message,
            //     hidden: true,
            //     type: "success",
            //     message: "Your Checkout is success",
            //   });
            // }

            setTimeout(() => {
              setMessage({
                ...message,
                hidden: false,
                type: "",
                message: "",
              });
            }, 3000);
          }
          // console.log(res);
          // console.log(res);
        })
        .catch((err) => {
          setFormValues({
            ...formValues,
            buttonLoading: false,
          });
          console.log(err);
        });
    } catch (err) {
      setFormValues({
        ...formValues,
        buttonLoading: false,
      });
      console.log(err);
    }
  };

  return (
    <>
      {selectedServices !== null ? (
        <div className="book-now-page">
          {selectedServices.category.category_name === "home_cleaning" ? (
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
                        setFormValues({
                          ...formValues,
                          bookingSummaryHidden: true,
                        })
                      }
                    >
                      <div className="name">Total</div>
                      <div className="value">
                        AED{" "}
                        {(formValues.totalPrice - formValues.discount).toFixed(
                          2
                        )}
                        <i className="fas fa-chevron-up"></i>
                      </div>
                    </div>

                    {currentPosition < 66.66 ? (
                      <button className="next" onClick={increment}>
                        Next
                      </button>
                    ) : formValues.currentUser ? (
                      <div className="btn-group">
                        <button
                          className={`next ${
                            formValues.buttonLoading ? "loading" : ""
                          }`}
                          onClick={() => {
                            setCardPay(false);
                            submitBooking(cardPay);
                          }}
                        >
                          <i className="fa-solid fa-money-bill-wave"></i>
                          Cash Pay
                        </button>

                        <button
                          className={`next ${
                            formValues.buttonLoading ? "loading" : ""
                          }`}
                          onClick={() => {
                            setCardPay(true);
                            submitBooking(cardPay);
                          }}
                        >
                          <i className="fa-brands fa-cc-stripe"></i>
                          Card Pay
                        </button>
                      </div>
                    ) : (
                      <button
                        className="next"
                        onClick={() =>
                          setFormValues({
                            ...formValues,
                            signInSignUpModal: true,
                          })
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
          ) : selectedServices.category.category_name === "deep_cleaning" ||
            selectedServices.category.category_name === "sofa_cleaning" ||
            selectedServices.category.category_name === "carpet_cleaning" ? (
            <div className="wrapper">
              <div className="title-area">
                <CustomTitleComponent title={formValues.title} />
                <ProgressBarComponent currentPosition={currentPosition} />
              </div>

              <main>
                <div className="all-forms">
                  <div className="all-forms-fields">
                    <div className="form-area">
                      <SinglePageFormComponent
                        selectedServices={selectedServices}
                      />
                    </div>
                  </div>

                  <div className="form-footer">
                    <div
                      className="total-price"
                      onClick={() =>
                        setFormValues({
                          ...formValues,
                          bookingSummaryHidden: true,
                        })
                      }
                    >
                      <div className="name">Total</div>
                      <div className="value">
                        AED{" "}
                        {(formValues.totalPrice - formValues.discount).toFixed(
                          2
                        )}
                        <i className="fas fa-chevron-up"></i>
                      </div>
                    </div>

                    {currentPosition ? (
                      <button className="previous" onClick={decrement}>
                        <i className="fas fa-arrow-left"></i>
                      </button>
                    ) : (
                      <div className="useless-div" />
                    )}

                    {formValues.currentUser ? (
                      <div className="btn-group">
                        <button
                          className={`next ${
                            formValues.buttonLoading ? "loading" : ""
                          }`}
                          onClick={() => {
                            setCardPay(false);
                            submitBooking();
                          }}
                        >
                          <i className="fa-solid fa-money-bill-wave"></i>
                          Cash Pay
                        </button>

                        <button
                          className={`next ${
                            formValues.buttonLoading ? "loading" : ""
                          }`}
                          onClick={() => {
                            setCardPay(true);
                            submitBooking();
                          }}
                        >
                          <i className="fa-brands fa-cc-stripe"></i>
                          Card Pay
                        </button>
                      </div>
                    ) : (
                      <button
                        className={`next ${
                          formValues.buttonLoading ? "loading" : ""
                        }`}
                        onClick={() =>
                          setFormValues({
                            ...formValues,
                            signInSignUpModal: true,
                          })
                        }
                      >
                        Login or Sign in
                      </button>
                    )}
                  </div>
                </div>

                <SelectedInformationsComponent />
              </main>
            </div>
          ) : null}
        </div>
      ) : (
        <LoadingComponent />
      )}
    </>
  );
};

export default BookNowPage;
