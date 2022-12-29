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
            setFormValues({ ...formValues, frequency: event.target.value })
          }
          value="One-Time"
          checked={formValues.frequency === "One-Time" ? true : false}
        />

        <CustomInputComponent
          type="radio"
          label="Bi-weekly"
          description="Book a recurring cleaning with the same professional every two-weeks"
          name="frequency"
          handleChange={(event) =>
            setFormValues({ ...formValues, frequency: event.target.value })
          }
          value="Bi-weekly"
          checked={formValues.frequency === "Bi-weekly" ? true : false}
        />

        <CustomInputComponent
          type="radio"
          label="Weekly"
          description="Book a recurring cleaning with the same professional every week"
          name="frequency"
          handleChange={(event) =>
            setFormValues({ ...formValues, frequency: event.target.value })
          }
          value="Weekly"
          checked={formValues.frequency === "Weekly" ? true : false}
        />
      </div>
    </div>
  );
};

export default FrequencyComponent;
