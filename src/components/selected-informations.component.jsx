import React, { useContext } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const SelectedInformationsComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  return (
    <div
      className={`selected-information ${
        formValues.bookingSummaryHidden ? "active" : ""
      }`}
    >
      <div className="list">
        <div className="item mobile-view-element">
          <div className="city">
            <div className="section-title">Booking Summary</div>
            <div
              className="name"
              onClick={() =>
                setFormValues({ ...formValues, bookingSummaryHidden: false })
              }
            >
              <i className="fas fa-times"></i>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="city">
            <div className="section-title">City</div>
            <div className="name">Dubai</div>
          </div>
        </div>

        <div className="item">
          <div className="service-details">
            <div className="section-title">Service Details</div>
            <ul>
              <li>
                <div className="name">Frequency</div>
                <div className="value">{formValues.frequency.name}</div>
              </li>

              <li>
                <div className="name">Duration</div>
                <div className="value">{formValues.hours} hours</div>
              </li>

              <li>
                <div className="name">Number of Professionals</div>
                <div className="value">{formValues.noOfProfessional}</div>
              </li>

              <li>
                <div className="name">Material</div>
                <div className="value">{formValues.materials}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="date-time">
            <div className="section-title">Date & Time</div>

            <ul>
              <li>
                <div className="name">Professional</div>
                <div className="value">
                  {formValues.professional.name}

                  {formValues.professional.imageUrl !== null ? (
                    <img
                      className="user-image"
                      src={formValues.professional.imageUrl}
                      alt="user"
                    />
                  ) : null}
                </div>
              </li>

              <li>
                <div className="name">Date</div>
                <div className="value">
                  {formValues.date.day} {formValues.date.month}{" "}
                  {formValues.date.date}
                </div>
              </li>

              <li>
                <div className="name">Start Time</div>
                <div className="value">{formValues.time}</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="item">
          <div className="address">
            <div className="section-title">Address</div>
            {formValues.address ? (
              <div className="name">{formValues.address}</div>
            ) : null}
          </div>
        </div>

        <div className="item">
          <div className="price-details">
            <div className="section-title">Price Details (Inc. Vat)</div>
            <ul>
              {formValues.discount !== 0 ? (
                <React.Fragment>
                  <li>
                    <div className="name">Subtotal</div>
                    <div className="value">AED {formValues.totalPrice}</div>
                  </li>

                  <li>
                    <div className="name">{formValues.frequency.name}</div>
                    <div className="value">-AED {formValues.discount}</div>
                  </li>
                </React.Fragment>
              ) : null}

              <li>
                <div className="name">Total</div>
                <div className="value">
                  AED {formValues.totalPrice - formValues.discount}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedInformationsComponent;
