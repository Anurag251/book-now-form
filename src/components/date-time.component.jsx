import React, { useContext, useEffect, useState } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

import logoImage from "../assets/images/1-LOGO DESIGN.svg";

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

  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [allTimes, setAllTimes] = useState(null);

  const busyDate = [];

  useEffect(() => {
    if (currentPosition === 66.66) {
      setFormValues({ ...formValues, title: "Date & Time" });
    }
  }, [currentPosition]);

  useEffect(() => {
    let timeIntervals = [];
    let todayDate = dates.toString().split(" ")[2];

    setStartTime(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0)
    );

    setAllTimes(timeIntervals);

    setEndTime(
      new Date(now.getFullYear(), now.getMonth(), now.getDate(), 20, 30, 0)
    );

    if (startTime !== null) {
      while (startTime <= endTime) {
        const startTimeString = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        startTime.setMinutes(startTime.getMinutes() + 30);

        const endTimeString = startTime.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeIntervals.push(`${startTimeString} - ${endTimeString}`);
      }
    }
  }, [formValues.date.date]);

  let now = new Date();
  let date = new Date(now.getTime());
  let endDate = new Date(now.getTime());
  endDate.setDate(endDate.getDate() + 14);

  let dates = [];

  while (date <= endDate) {
    dates.push(new Date(date.getTime()));
    date.setDate(date.getDate() + 1);
  }

  return (
    <div className="date-time-section">
      {professionalDatas.length ? (
        <div className="section">
          <div className="form-title">Which professional do you prefer?</div>

          <p className="sub-title">Top-rated professionals in your area</p>

          <div className="professional-list">
            <div
              className={`item ${
                formValues.professional.id === 0 ? "active" : ""
              }`}
              onClick={() => {
                setFormValues({
                  ...formValues,
                  professional: {
                    id: 0,
                    name: "Auto Assign",
                    rating: 5.5,
                    imageUrl: logoImage,
                  },

                  date: {
                    day: "",
                    date: 0,
                    month: "",
                  },

                  time: "",
                });
              }}
            >
              <img className="user-image" src={logoImage} alt="" />

              <div className="name">Auto Assign</div>

              <p style={{ marginTop: ".5rem" }}>
                We have best professionals around
              </p>

              <button className="details-btn">See Details</button>
            </div>
            {professionalDatas.map((data, idx) => (
              <div
                key={idx}
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
                      imageUrl: data.profile_image,
                    },

                    date: {
                      day: "",
                      date: 0,
                      month: "",
                    },

                    time: "",
                  });

                  setJobStatus(data.jobstatus);
                  setSifts(data.shift);
                }}
              >
                <img className="user-image" src={data.profile_image} alt="" />

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

        {formValues.professional.name === "Auto Assign" ? (
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
        ) : (
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
                ? sifts
                    // .filter((data, idx) => data.work_date !== jobStatus[0].job_date)
                    .map((data, idx) => (
                      <li className="select-day" key={idx}>
                        <label
                          className="button-label"
                          htmlFor={data.work_date + "button"}
                        >
                          {data.day_of_week[0] +
                            data.day_of_week[1] +
                            data.day_of_week[2]}
                        </label>
                        <input
                          id={data.work_date + "button"}
                          type="button"
                          value={data.work_date.toString().split("-")[2]}
                          onClick={(e) => {
                            setFormValues({
                              ...formValues,
                              date: {
                                day: parseInt(
                                  data.work_date.toString().split("-")[2]
                                ),
                                date: e.target.value,
                                month: data.work_date.toString().split("-")[1],
                              },
                            });

                            // console.log(data.work_date.toString().split("-")[2]);

                            // if (jobStatus !== null) {
                            //   jobStatus.forEach((jobData) => {
                            //     console.log(jobData);

                            //     if (jobData.job_date === "2023-01-14") {
                            //       busyDate.push(jobData.job_date);
                            //     }
                            //   });
                            // }

                            // console.log(busyDate);

                            setSift(data.shifts);
                          }}
                          className={`input-button ${
                            formValues.date.date ===
                            data.work_date.toString().split("-")[2]
                              ? "active"
                              : ""
                          }`}
                        />
                      </li>
                    ))
                : "Please choose your professional"}
            </ul>
          </div>
        )}
      </div>

      <div className="section">
        <div className="form-title">What time would you like us to start?</div>

        {formValues.professional.name === "Auto Assign" ? (
          <div className="select-button-list yesNo">
            {allTimes !== null
              ? allTimes
                  // .filter((data, idx) => idx < 10)
                  .map((data, idx) => (
                    <input
                      key={idx}
                      style={{ minWidth: "180px" }}
                      type="button"
                      onClick={(e) =>
                        setFormValues({
                          ...formValues,
                          time: e.target.value,
                        })
                      }
                      className={`input-button ${
                        formValues.time === data ? "active" : ""
                      }`}
                      value={data}
                    />
                  ))
              : null}
          </div>
        ) : (
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
        )}

        <p className="arrive">
          Your professional will arrive between {formValues.time}
        </p>
      </div>
    </div>
  );
};

export default DateAndTimeComponent;
