import React, { useState } from "react";
import { useContext } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "../sign-in-and-sign-up-modal/form-input.component";
import MapsComponent from "./maps.component";

const GoogleMapPopupComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationError, setSelectedLocationError] = useState(false);

  return (
    <div
      className={`google-maps-popup ${
        formValues.googleMapPopup ? "active" : ""
      } ${selectedLocationError ? "error" : ""}`}
    >
      <div className="popup-container">
        <div
          className="popup-close-btn"
          onClick={() =>
            setFormValues({ ...formValues, googleMapPopup: false })
          }
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="popup-head">
          <div className="popup-title">Please Select Your Location</div>
          <p>Service available under green circle</p>

          <div className="search-box">
            <input type="search" placeholder="Search..." />

            <button className="search-btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="map-area">
          <MapsComponent
            setFormValues={setFormValues}
            formValues={formValues}
            setSelectedLocation={setSelectedLocation}
            setSelectedLocationError={setSelectedLocationError}
          />
        </div>

        {selectedLocation !== "" ? (
          <div className="popup-footer">
            <textarea
              className="your-location"
              rows="5"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            ></textarea>

            <button
              className="confirm"
              onClick={() =>
                setFormValues({
                  ...formValues,
                  googleMapPopup: false,
                  address: selectedLocation,
                })
              }
            >
              Confirm
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default GoogleMapPopupComponent;
