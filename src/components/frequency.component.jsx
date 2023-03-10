import React, { useContext, useEffect, useState } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const FrequencyComponent = ({ currentPosition }) => {
  const [frequency, setFrequency] = useState([]);
  const { formValues, setFormValues } = useContext(BookNowContext);

  useEffect(() => {
    if (currentPosition === 0) {
      setFormValues({ ...formValues, title: "Frequency" });
    }
  }, [currentPosition]);

  useEffect(() => {
    fetch("  https://stnepal.com.np/sherpatech/api/v1/frequency")
      .then((res) => res.json())
      .then((data) => setFrequency(data.data.frequency_details));
  }, []);

  // console.log(frequency);

  return (
    <div className="frequency">
      <div className="form-title">How often do you need your professional?</div>

      <div className="input-area">
        <div
          className={`custom-input ${
            formValues.frequency.name === "One-Time" ? "active" : ""
          }`}
          onClick={() =>
            setFormValues({
              ...formValues,
              frequency: {
                name: "One-Time",
                price: 100,
                discount: 10,
                perPerson: 60,
                perHours: 30,
              },
            })
          }
        >
          <div className="input-indicator"></div>

          <div className="input-sec">
            <div className="form-input-label">One-time</div>
            <p className="description">Book a cleaning for one time only</p>
          </div>
        </div>

        <div
          className={`custom-input ${
            formValues.frequency.name === "Bi-weekly" ? "active" : ""
          }`}
          onClick={() =>
            setFormValues({
              ...formValues,
              frequency: {
                name: "Bi-weekly",
                price: 200,
                discount: 20,
                perPerson: 50,
                perHours: 20,
              },
            })
          }
        >
          <div className="input-indicator"></div>

          <div className="input-sec">
            <div className="form-input-label">Bi-weekly</div>
            <p className="description">
              Book a recurring cleaning with the same professional every
              two-weeks
            </p>
          </div>
        </div>

        <div
          className={`custom-input ${
            formValues.frequency.name === "Weekly" ? "active" : ""
          }`}
          onClick={() =>
            setFormValues({
              ...formValues,
              frequency: {
                name: "Weekly",
                price: 300,
                discount: 30,
                perPerson: 40,
                perHours: 20,
              },
            })
          }
        >
          <div className="input-indicator"></div>

          <div className="input-sec">
            <div className="form-input-label">Weekly</div>
            <p className="description">
              Book a recurring cleaning with the same professional every week
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequencyComponent;
