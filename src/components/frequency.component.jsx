import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";
import CustomInputComponent from "./custom-input.component";

const FrequencyComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  useEffect(() => {
    setFormValues({ ...formValues, title: "Frequency" });
  }, []);

  return (
    <div className="frequency">
      <div className="form-title">How often do you need your professional?</div>

      <div className="input-area">
        <CustomInputComponent
          type="radio"
          label="One-time"
          description="Book a cleaning for one time only"
          name="frequency"
          handleChange={(event) =>
            setFormValues({
              ...formValues,
              frequency: {
                name: event.target.value,
                price: 100,
                discount: 10,
                perPerson: 60,
                perHours: 30,
              },
            })
          }
          value="One-Time"
          checked={formValues.frequency.name === "One-Time" ? true : false}
        />

        <CustomInputComponent
          type="radio"
          label="Bi-weekly"
          description="Book a recurring cleaning with the same professional every two-weeks"
          name="frequency"
          handleChange={(event) =>
            setFormValues({
              ...formValues,
              frequency: {
                name: event.target.value,
                price: 200,
                discount: 20,
                perPerson: 50,
                perHours: 20,
              },
            })
          }
          value="Bi-weekly"
          checked={formValues.frequency.name === "Bi-weekly" ? true : false}
        />

        <CustomInputComponent
          type="radio"
          label="Weekly"
          description="Book a recurring cleaning with the same professional every week"
          name="frequency"
          handleChange={(event) =>
            setFormValues({
              ...formValues,
              frequency: {
                name: event.target.value,
                price: 300,
                discount: 30,
                perPerson: 40,
                perHours: 20,
              },
            })
          }
          value="Weekly"
          checked={formValues.frequency.name === "Weekly" ? true : false}
        />
      </div>
    </div>
  );
};

export default FrequencyComponent;
