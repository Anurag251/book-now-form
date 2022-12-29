import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";
import image from "../assets/images/user.png";
import image1 from "../assets/images/user1.svg";
import image2 from "../assets/images/user2.png";
import image3 from "../assets/images/user3.jpeg";
import image4 from "../assets/images/user4.jpeg";
import image5 from "../assets/images/user5.png";

const DateAndTimeComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  useEffect(() => {
    setFormValues({ ...formValues, title: "Date & Time" });
  }, []);

  // var firstDay = new Date("2009/06/25");
  // var nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);

  // var curr = new Date(); // get current date
  // var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
  // var last = first + 6; // last day is the first day + 6

  // var firstday = new Date(curr.setDate(first)).toUTCString();
  // var lastday = new Date(curr.setDate(last)).toUTCString();
  // console.log(firstday);
  // console.log(lastday);

  return (
    <div className="date-time-section">
      <div className="section">
        <div className="form-title">Which professional do you prefer?</div>

        <p className="sub-title">Top-rated professionals in your area</p>

        <div className="professional-list">
          <div
            className={`item ${
              formValues.professional.id === "1" ? "active" : ""
            }`}
            id="1"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "1",
                  name: "Norma",
                  rating: "4.9",
                  imageUrl: image,
                },
              })
            }
          >
            <img className="user-image" src={image} alt="" />

            <div className="name">Norma</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "2" ? "active" : ""
            }`}
            id="2"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "2",
                  name: "Roy",
                  rating: "4.9",
                  imageUrl: image2,
                },
              })
            }
          >
            <img className="user-image" src={image2} alt="" />

            <div className="name">Roy</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "3" ? "active" : ""
            }`}
            id="3"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "3",
                  name: "Emiliana",
                  rating: "4.9",
                  imageUrl: image3,
                },
              })
            }
          >
            <img className="user-image" src={image3} alt="" />

            <div className="name">Emiliana</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "4" ? "active" : ""
            }`}
            id="4"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "4",
                  name: "Daisy",
                  rating: "4.9",
                  imageUrl: image4,
                },
              })
            }
          >
            <img className="user-image" src={image4} alt="" />

            <div className="name">Daisy</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "5" ? "active" : ""
            }`}
            id="5"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "5",
                  name: "Apsara",
                  rating: "4.9",
                  imageUrl: image5,
                },
              })
            }
          >
            <img className="user-image" src={image5} alt="" />

            <div className="name">Apsara</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "6" ? "active" : ""
            }`}
            id="6"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "6",
                  name: "Dolphin",
                  rating: "4.9",
                  imageUrl: image2,
                },
              })
            }
          >
            <img className="user-image" src={image2} alt="" />

            <div className="name">Dolphin</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "7" ? "active" : ""
            }`}
            id="7"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "7",
                  name: "Shark",
                  rating: "4.9",
                  imageUrl: image3,
                },
              })
            }
          >
            <img className="user-image" src={image3} alt="" />

            <div className="name">Shark</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>

          <div
            className={`item ${
              formValues.professional.id === "8" ? "active" : ""
            }`}
            id="8"
            onClick={() =>
              setFormValues({
                ...formValues,
                professional: {
                  id: "8",
                  name: "Snake",
                  rating: "4.9",
                  imageUrl: image4,
                },
              })
            }
          >
            <img className="user-image" src={image4} alt="" />

            <div className="name">Snake</div>
            <div className="rating">✭ 4.9</div>

            <p>Recommended in your area</p>

            <button className="details-btn">See Details</button>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="form-title">When would you like your service?</div>

        <div className="day-list">
          <ul className="select-button-list">
            <li className="select-day">
              <label className="button-label" htmlFor="Sun">
                Sun
              </label>
              <input
                id="Sun"
                type="button"
                value="1"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "1" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Mon">
                Mon
              </label>
              <input
                id="Mon"
                type="button"
                value="2"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "2" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Tue">
                Tue
              </label>
              <input
                id="Tue"
                type="button"
                value="3"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "3" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Wed">
                Wed
              </label>
              <input
                id="Wed"
                type="button"
                value="4"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "4" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Thu">
                Thu
              </label>
              <input
                id="Thu"
                type="button"
                value="5"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "5" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Fri">
                Fri
              </label>
              <input
                id="Fri"
                type="button"
                value="6"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "6" ? "active" : ""
                }`}
              />
            </li>

            <li className="select-day">
              <label className="button-label" htmlFor="Sat">
                Sat
              </label>
              <input
                id="Sat"
                type="button"
                value="7"
                onClick={(e) =>
                  setFormValues({ ...formValues, day: e.target.value })
                }
                className={`input-button ${
                  formValues.day === "7" ? "active" : ""
                }`}
              />
            </li>
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
