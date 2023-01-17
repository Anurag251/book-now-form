import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const FrequencyComponent = ({ currentPosition, frequencyDatas }) => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  useEffect(() => {
    if (currentPosition === 0) {
      setFormValues({ ...formValues, title: "Frequency" });
    }
  }, [currentPosition]);

  // console.log(frequencyDatas);

  return (
    <div className="frequency">
      <div className="form-title">How often do you need your professional?</div>

      <div className="input-area">
        {frequencyDatas.length
          ? frequencyDatas.map((frequency) => (
              <div
                key={frequency.id}
                className={`custom-input ${
                  formValues.frequency.name === frequency.title ? "active" : ""
                }`}
                onClick={() =>
                  setFormValues({
                    ...formValues,
                    frequency: {
                      name: frequency.title,
                      price: frequency.rate,
                      discount: 0,
                      perPerson: frequency.professionalrate,
                      perHours: frequency.hourrate,
                    },
                  })
                }
              >
                <div className="input-indicator"></div>

                <div className="input-sec">
                  <div className="form-input-label">{frequency.title}</div>
                  <p className="description">{frequency.description}</p>
                </div>
              </div>
            ))
          : "No data found"}

        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default FrequencyComponent;
