import React, { useContext, useEffect, useState } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";
// import GoogleMapPopupComponent from "./google-map-popup.component";

const ServiceDetailsComponent = ({ currentPosition, serviceDatas }) => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  useEffect(() => {
    if (currentPosition === 33.33) {
      setFormValues({ ...formValues, title: "Service Details" });
    }
  }, [currentPosition]);

  return (
    <div className="service-details-section">
      {/* <GoogleMapPopupComponent /> */}

      <div className="section">
        <div className="form-title">Enter Your Address Please</div>

        <div className="message-box">
          <input
            className="message-area"
            cols="30"
            rows="5"
            name="address"
            onChange={(e) =>
              setFormValues({ ...formValues, address: e.target.value })
            }
            placeholder="Example: Dubai, Nepal, London, India, China, etc."
          />
        </div>
      </div>

      <div className="section">
        <div className="form-title">
          How many hours do you need your professional to stay?
          <button
            className="info-btn"
            onClick={() =>
              setFormValues({ ...formValues, isHoursModalHidden: true })
            }
          >
            <i className="fas fa-info"></i>
          </button>
        </div>

        <div className="select-button-list">
          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 2 ? "active" : ""}`}
            value="2"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 3 ? "active" : ""}`}
            value="3"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 4 ? "active" : ""}`}
            value="4"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 5 ? "active" : ""}`}
            value="5"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 6 ? "active" : ""}`}
            value="6"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 7 ? "active" : ""}`}
            value="7"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, hours: parseInt(e.target.value) })
            }
            className={`input-button ${formValues.hours === 8 ? "active" : ""}`}
            value="8"
          />
        </div>
      </div>

      <div className="section">
        <div className="form-title">How many professionals do you need?</div>

        <div className="select-button-list">
          <input
            type="button"
            onClick={(e) =>
              setFormValues({
                ...formValues,
                noOfProfessional: parseInt(e.target.value),
              })
            }
            className={`input-button ${
              formValues.noOfProfessional === 1 ? "active" : ""
            }`}
            value="1"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({
                ...formValues,
                noOfProfessional: parseInt(e.target.value),
              })
            }
            className={`input-button ${
              formValues.noOfProfessional === 2 ? "active" : ""
            }`}
            value="2"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({
                ...formValues,
                noOfProfessional: parseInt(e.target.value),
              })
            }
            className={`input-button ${
              formValues.noOfProfessional === 3 ? "active" : ""
            }`}
            value="3"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, noOfProfessional: e.target.value })
            }
            className={`input-button ${
              formValues.noOfProfessional === "4" ? "active" : ""
            }`}
            value="4"
          />
        </div>
      </div>

      <div className="section">
        <div className="form-title">
          Do you require cleaning materials?
          <button
            className="info-btn"
            onClick={() =>
              setFormValues({ ...formValues, isMaterialModalHidden: true })
            }
          >
            <i className="fas fa-info"></i>
          </button>
        </div>

        <div className="select-button-list yesNo">
          <input
            type="button"
            onClick={() =>
              setFormValues({
                ...formValues,
                materials: "No",
                materialPrice: 0,
              })
            }
            className={`input-button ${
              formValues.materials === "No" ? "active" : ""
            }`}
            value="No, I have them"
          />

          <input
            type="button"
            onClick={() =>
              setFormValues({
                ...formValues,
                materials: "Yes",
                materialPrice: serviceDatas.cleaningmaterials,
              })
            }
            className={`input-button ${
              formValues.materials === "Yes" ? "active" : ""
            }`}
            value="Yes, please"
          />
        </div>
      </div>

      <div className="section">
        <div className="form-title">
          Do you have any specific cleaning instructions?
        </div>

        <div className="message-box">
          <textarea
            className="message-area"
            cols="30"
            rows="5"
            name="message"
            onChange={(e) =>
              setFormValues({ ...formValues, message: e.target.value })
            }
            placeholder="Example: Key under the mat, ironing, window cleaning, etc."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsComponent;
