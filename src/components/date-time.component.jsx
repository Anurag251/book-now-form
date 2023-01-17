import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const DateAndTimeComponent = ({
  currentPosition,
  professionalData,
  professionalDatas,
}) => {
  const { formValues, setFormValues, selectedService } =
    useContext(BookNowContext);

  // console.log(professionalDatas);

  useEffect(() => {
    if (currentPosition === 66.66) {
      setFormValues({ ...formValues, title: "Date & Time" });
    }
  }, [currentPosition]);

  // Get the current date and time
  let now = new Date();

  // Set the starting date to the current date
  let date = new Date(now.getTime());

  // Set the ending date to two weeks from now
  let endDate = new Date(now.getTime());
  endDate.setDate(endDate.getDate() + 14);

  // Initialize an empty array to hold the dates
  let dates = [];

  // Loop through the dates from the starting date to the ending date
  while (date <= endDate) {
    // Add the current date to the array
    dates.push(new Date(date.getTime()));

    // Increment the date by one day
    date.setDate(date.getDate() + 1);
  }

  // Print the days, dates, and times of the next two weeks
  for (let i = 0; i < dates.length; i++) {
    dates[i];
  }

  return (
    <div className="date-time-section">
      {professionalDatas.length ? (
        <div className="section">
          <div className="form-title">Which professional do you prefer?</div>

          <p className="sub-title">Top-rated professionals in your area</p>

          <div className="professional-list">
            {professionalDatas.map((data) => (
              <div
                key={data.id}
                className={`item ${
                  formValues.professional.id === data.id ? "active" : ""
                }`}
                id={data.id}
                onClick={() =>
                  setFormValues({
                    ...formValues,
                    professional: {
                      id: data.id,
                      name: data.first_name + " " + data.last_name,
                      rating: 5.5,
                      imageUrl: data.image,
                    },
                  })
                }
              >
                <img className="user-image" src={data.image} alt="" />

                <div className="name">
                  {data.first_name} {data.last_name}
                </div>
                {data.rating !== 0 ? <div className="rating">✭ 5.5</div> : null}

                <p>Recommended in your area</p>

                <button className="details-btn">See Details</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        "No data found"
      )}

      <div className="section">
        <div className="form-title">When would you like your service?</div>

        <div className="day-list">
          <ul className="select-button-list">
            {dates
              // .filter((data, idx) => idx === 3)
              .map((allDate, idx) => {
                let day = allDate.toString().split(" ")[0];
                let month = allDate.toString().split(" ")[1];
                let date = allDate.toString().split(" ")[2];

                return (
                  <li className="select-day" key={idx}>
                    <label className="button-label" htmlFor={date + "button"}>
                      {day}
                    </label>
                    <input
                      id={date + "button"}
                      type="button"
                      value={date}
                      onClick={(e) =>
                        setFormValues({
                          ...formValues,
                          date: {
                            day: day,
                            date: e.target.value,
                            month: month,
                          },
                        })
                      }
                      className={`input-button ${
                        formValues.date.date === date ? "active" : ""
                      }`}
                    />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="form-title">What time would you like us to start?</div>

        <div className="select-button-list yesNo">
          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, time: e.target.value })
            }
            className={`input-button ${
              formValues.time === "08:00-08:30" ? "active" : ""
            }`}
            value="08:00-08:30"
          />

          <input
            type="button"
            onClick={(e) =>
              setFormValues({ ...formValues, time: e.target.value })
            }
            className={`input-button ${
              formValues.time === "08:30-09:00" ? "active" : ""
            }`}
            value="08:30-09:00"
          />
        </div>

        <p className="arrive">
          Your professional will arrive between {formValues.time}
        </p>
      </div>
    </div>
  );
};

export default DateAndTimeComponent;
