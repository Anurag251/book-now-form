import React, { useContext, useEffect, useState } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const DateAndTimeComponent = ({
  currentPosition,
  professionalData,
  professionalDatas,
}) => {
  const { formValues, setFormValues, selectedService } =
    useContext(BookNowContext);

  const [sifts, setSifts] = useState(null);
  const [sift, setSift] = useState(null);
  const [jobStatus, setJobStatus] = useState(null);

  const busyDate = [];

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

  var currentTime = new Date();
  var endTime = new Date();
  endTime.setHours(20, 0, 0, 0); // 8pm

  var hours = [];
  while (currentTime.getHours() < endTime.getHours()) {
    hours.push(currentTime.getHours());
    currentTime.setHours(currentTime.getHours() + 1);
  }
  // console.log(professionalDatas);

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
                onClick={() => {
                  setFormValues({
                    ...formValues,
                    professional: {
                      id: data.id,
                      name: data.first_name + " " + data.last_name,
                      rating: 5.5,
                      imageUrl: data.image,
                    },

                    date: {
                      day: "",
                      date: 0,
                      month: "",
                    },
                  });

                  setJobStatus(data.jobstatus);
                  setSifts(data.shift);
                }}
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
        "All professional are busy please try tomorrow"
      )}

      <div className="section">
        <div className="form-title">When would you like your service?</div>

        <div className="day-list">
          {/* <ul className="select-button-list">
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
          </ul> */}

          <ul className="select-button-list">
            {sifts !== null
              ? sifts.map((data, idx) => (
                  <li className="select-day" key={idx}>
                    <label
                      className="button-label"
                      htmlFor={data.weekday + "button"}
                    >
                      {data.month}
                    </label>
                    <input
                      id={data.weekday + "button"}
                      type="button"
                      value={data.weekday}
                      onClick={(e) => {
                        setFormValues({
                          ...formValues,
                          date: {
                            day: parseInt(data.year),
                            date: e.target.value,
                            month: data.month,
                          },
                        });

                        if (jobStatus !== null) {
                          jobStatus.forEach((jobData) => {
                            console.log(jobData);

                            if (jobData.job_date === "2023-01-14") {
                              busyDate.push(jobData.job_date);
                            }
                          });
                        }

                        // console.log(busyDate);

                        setSift(data.shifts);
                      }}
                      className={`input-button ${
                        formValues.date.date === data.weekday ? "active" : ""
                      }`}
                    />
                  </li>
                ))
              : "Please choose your professional"}
          </ul>
        </div>
      </div>

      <div className="section">
        <div className="form-title">What time would you like us to start?</div>

        <div className="select-button-list yesNo">
          {sift !== null
            ? sift.map((data, idx) => (
                <input
                  key={idx}
                  type="button"
                  onClick={(e) =>
                    setFormValues({ ...formValues, time: e.target.value })
                  }
                  className={`input-button ${
                    formValues.time === data ? "active" : ""
                  }`}
                  value={data}
                />
              ))
            : "Please select date"}
        </div>

        <p className="arrive">
          Your professional will arrive between {formValues.time}
        </p>
      </div>
    </div>
  );
};

export default DateAndTimeComponent;
