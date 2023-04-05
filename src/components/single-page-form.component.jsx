import React, { useContext, useEffect, useState } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";
import FormInputComponent from "./sign-in-and-sign-up-modal/form-input.component";

const SinglePageFormComponent = ({ selectedServices }) => {
  const threeSit =
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const singleSit =
    "https://images.pexels.com/photos/105004/pexels-photo-105004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  const {
    formValues,
    setFormValues,
    formValuesDeep,
    setFormValuesDeep,
    formValuesSofa,
    setFormValuesSofa,
    formValuesCarpet,
    setFormValuesCarpet,
    message,
    setMessage,
  } = useContext(BookNowContext);
  const [uniqueCateNames, setUniqueCateNames] = useState(null);
  const [selectedCateNames, setSelectedCateNames] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [allTimes, setAllTimes] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [quantity1, setQuantity1] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalPrice1, setTotalPrice1] = useState(0);

  const [carpetSize, setCarpetSize] = useState({
    sizeIn: "",
    length: "",
    breadth: "",
    sqm: "",
    actualSize: 0,
  });

  let catName = [];

  let now = new Date();
  let date = new Date(now.getTime());
  let endDate = new Date(now.getTime());
  endDate.setDate(endDate.getDate() + 14);

  let dates = [];

  while (date <= endDate) {
    dates.push(new Date(date.getTime()));
    date.setDate(date.getDate() + 1);
  }

  useEffect(() => {
    if (selectedServices.category.category_name === "deep_cleaning") {
      selectedServices.rate.forEach((data) => {
        if (data.subcategory !== null) {
          catName.push(data.subcategory.subcategory_name);
        }
      });

      setUniqueCateNames([...new Set(catName)]);
    }
  }, [selectedServices.category.category_name]);

  useEffect(() => {
    let timeIntervals = [];
    let todayDate = dates.toString().split(" ")[2];

    if (formValues.date.date === todayDate) {
      setStartTime(
        new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          now.getHours(),
          Math.ceil(now.getMinutes() / 30) * 30,
          0
        )
      );
      setAllTimes(timeIntervals);
    } else {
      setStartTime(
        new Date(now.getFullYear(), now.getMonth(), now.getDate(), 8, 0, 0)
      );

      setAllTimes(timeIntervals);
    }

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

  // console.log(allTimes);

  useEffect(() => {
    if (selectedServices.category.category_name === "sofa_cleaning") {
      setTotalPrice(
        quantity * formValuesSofa.addRate +
          parseInt(selectedServices.rate[0].value)
      );

      setFormValues({
        ...formValues,
        totalPrice:
          quantity * formValuesSofa.addRate +
          parseInt(selectedServices.rate[0].value),
      });
    }
  }, [quantity]);

  useEffect(() => {
    if (selectedServices.category.category_name === "sofa_cleaning") {
      setTotalPrice1(
        quantity1 * formValuesSofa.addRate +
          parseInt(selectedServices.rate[2].value)
      );

      setFormValues({
        ...formValues,
        totalPrice:
          quantity1 * formValuesSofa.addRate +
          parseInt(selectedServices.rate[2].value),
      });
    }
  }, [quantity1]);

  useEffect(() => {
    setFormValuesSofa({
      ...formValuesSofa,
      quantity: quantity ? quantity : quantity1 ? quantity1 : 0,
    });
  }, [quantity, quantity1]);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCarpetSize({ ...carpetSize, [name]: value });
  };

  const calculator = () => {
    if (
      carpetSize.length.length ||
      carpetSize.breadth.length ||
      carpetSize.sqm.length
    ) {
      if (carpetSize.sizeIn === "MM") {
        setCarpetSize({
          ...carpetSize,
          actualSize: carpetSize.length * carpetSize.breadth,
        });
      } else if (carpetSize.sizeIn === "CM") {
        if (carpetSize.length.length >= 3 && carpetSize.breadth.length >= 3) {
          setCarpetSize({
            ...carpetSize,
            actualSize: (
              (carpetSize.length / 100) *
              (carpetSize.breadth / 100)
            ).toFixed(2),
          });
        } else {
          setMessage({
            ...message,
            hidden: true,
            type: "error",
            message: "Carpet size is less",
          });

          setTimeout(() => {
            setMessage({
              ...message,
              hidden: false,
              type: "",
              message: "",
            });
          }, 3000);
        }
      } else if (carpetSize.sizeIn === "SQ") {
        setCarpetSize({
          ...carpetSize,
          actualSize: carpetSize.sqm,
        });
      }
    } else {
      setMessage({
        ...message,
        hidden: true,
        type: "error",
        message: "All fields are required",
      });

      setTimeout(() => {
        setMessage({
          ...message,
          hidden: false,
          type: "",
          message: "",
        });
      }, 3000);
    }
  };

  useEffect(() => {
    setFormValues({
      ...formValues,
      totalPrice: (
        carpetSize.actualSize * selectedServices.rate[0].value
      ).toFixed(2),
    });

    setFormValuesCarpet({
      ...formValuesCarpet,
      id: selectedServices.rate[0].id,
      value: carpetSize.actualSize,
    });
  }, [carpetSize.actualSize]);

  return (
    <div className="single-page-form">
      <div className="section">
        <div className="form-title">Your Location Please</div>

        <div className="message-box" style={{ padding: "0" }}>
          <input
            type="button"
            className="message-area"
            name="address"
            style={{
              textAlign: "left",
              height: "100%",
              cursor: "pointer",
              padding: "1rem",
            }}
            value={
              formValues.address === "" ? "Select location" : formValues.address
            }
            onClick={() =>
              setFormValues({ ...formValues, googleMapPopup: true })
            }
          />
        </div>
      </div>

      <div className="section">
        <div className="form-title">Your Apartment Details</div>

        <div className="message-box" style={{ padding: "0" }}>
          <input
            type="text"
            className="message-area"
            name="message"
            style={{
              textAlign: "left",
              height: "100%",
              padding: "1rem",
              fontSize: "18px,",
            }}
            onChange={(e) =>
              setFormValues({ ...formValues, apartmentDetails: e.target.value })
            }
            placeholder="Apartment Details"
          />
        </div>
      </div>

      {selectedServices.category.category_name === "deep_cleaning" ? (
        <div className="section">
          <div className="form-title">Please choose category</div>
          <div className="input-area">
            {uniqueCateNames !== null
              ? uniqueCateNames.map((uniqueCateName, idx) => (
                  <div
                    key={idx}
                    className={`custom-input ${
                      uniqueCateName === formValuesDeep.category ? "active" : ""
                    }`}
                    onClick={() => {
                      setSelectedCateNames(uniqueCateName);
                      setFormValuesDeep({
                        ...formValuesDeep,
                        category: uniqueCateName,
                        rate: 0,
                      });
                    }}
                  >
                    <div className="input-indicator"></div>

                    <div className="input-sec">
                      <div
                        className="form-input-label"
                        style={{ textTransform: "capitalize" }}
                      >
                        {uniqueCateName}
                      </div>
                    </div>
                  </div>
                ))
              : null}
          </div>
        </div>
      ) : selectedServices.category.category_name === "sofa_cleaning" ? (
        <React.Fragment>
          <div className="section">
            <div className="form-title">Please choose your sofa</div>

            <div className="input-area-image">
              <div
                className={`card-box ${
                  selectedServices.rate[0].field_name ===
                  formValuesSofa.category
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setFormValuesSofa({
                    ...formValuesSofa,
                    id: selectedServices.rate[0].id,
                    rate: selectedServices.rate[0].value,
                    category: selectedServices.rate[0].field_name,
                    addRate: selectedServices.rate[1].value,
                  });

                  setFormValues({
                    ...formValues,
                    totalPrice: selectedServices.rate[0].value,
                  });
                  setQuantity1(0);
                }}
              >
                <img className="image" src={threeSit} alt="" />

                <div className="input-sec">
                  <div
                    className="form-input-label"
                    style={{ textTransform: "capitalize" }}
                  >
                    {selectedServices.rate[0].subcategory.subcategory_name}
                  </div>

                  <div className="price">
                    {quantity === 0
                      ? selectedServices.rate[0].value
                      : totalPrice}
                  </div>

                  {quantity === 0 ? (
                    <button className="addSeat" onClick={() => setQuantity(1)}>
                      Add Seat
                    </button>
                  ) : (
                    <div className="qunatity-btn">
                      <button
                        onClick={() => {
                          setQuantity(quantity - 1);
                        }}
                      >
                        -
                      </button>

                      <div className="display-qunatity">{quantity}</div>

                      <button
                        onClick={() => {
                          setQuantity(quantity + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div
                className={`card-box ${
                  selectedServices.rate[2].field_name ===
                  formValuesSofa.category
                    ? "active"
                    : ""
                }`}
                onClick={() => {
                  setFormValuesSofa({
                    ...formValuesSofa,
                    id: selectedServices.rate[2].id,
                    rate: selectedServices.rate[2].value,
                    category: selectedServices.rate[2].field_name,
                    addRate: selectedServices.rate[3].value,
                  });

                  setFormValues({
                    ...formValues,
                    totalPrice: selectedServices.rate[2].value,
                  });
                  setQuantity(0);
                }}
              >
                <img className="image" src={singleSit} alt="" />

                <div className="input-sec">
                  <div
                    className="form-input-label"
                    style={{ textTransform: "capitalize" }}
                  >
                    {selectedServices.rate[2].subcategory.subcategory_name}
                  </div>

                  <div className="price">
                    {quantity1 === 0
                      ? selectedServices.rate[2].value
                      : totalPrice1}
                  </div>

                  {quantity1 === 0 ? (
                    <button className="addSeat" onClick={() => setQuantity1(1)}>
                      Add Seat
                    </button>
                  ) : (
                    <div className="qunatity-btn">
                      <button
                        onClick={() => {
                          setQuantity1(quantity1 - 1);
                        }}
                      >
                        -
                      </button>

                      <div className="display-qunatity">{quantity1}</div>

                      <button
                        onClick={() => {
                          setQuantity1(quantity1 + 1);
                        }}
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : selectedServices.category.category_name === "carpet_cleaning" ? (
        <div className="section">
          <div className="form-title">Please choose category</div>

          <div className="calculator">
            <div className="form-input-area">
              <div className="input-sec">
                <select
                  name="sizeIn"
                  id=""
                  className="form-input select"
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  onClick={() => {
                    setCarpetSize({
                      ...carpetSize,
                      actualSize: "",
                      length: "",
                      breadth: "",
                      sqm: "",
                    });
                  }}
                  value={carpetSize.sizeIn}
                >
                  <option value="">--Select Carpet Size in--</option>
                  <option value="CM">Centi Meter</option>
                  <option value="MM">Meter</option>
                  <option value="SQ">Squar Meter</option>
                </select>
              </div>
            </div>

            {carpetSize.sizeIn !== "" ? (
              <React.Fragment>
                {carpetSize.sizeIn === "SQ" ? (
                  <div className="input-box">
                    <FormInputComponent
                      label="Squar Meter"
                      type="number"
                      name="sqm"
                      handleChange={handleChange}
                      value={carpetSize.sqm}
                    />
                  </div>
                ) : (
                  <React.Fragment>
                    <div className="input-box">
                      <FormInputComponent
                        label="Length"
                        type="number"
                        name="length"
                        minLength="3"
                        maxLength="10"
                        handleChange={handleChange}
                        value={carpetSize.length}
                      />
                    </div>

                    <div className="input-box">
                      <FormInputComponent
                        label="Breadth"
                        type="number"
                        name="breadth"
                        minLength="3"
                        maxLength="10"
                        handleChange={handleChange}
                        value={carpetSize.breadth}
                      />
                    </div>
                  </React.Fragment>
                )}

                <button className="calBtn" onClick={calculator}>
                  Calculate
                </button>
              </React.Fragment>
            ) : null}
          </div>

          {carpetSize.actualSize ? (
            <div className="output">
              <h4>
                Your Carpet Size: <strong>{carpetSize.actualSize}</strong>
              </h4>
              <h4>
                Carpet price: <strong>{selectedServices.rate[0].value}</strong>
              </h4>
              <h4>
                Your Total:{" "}
                <strong>
                  {(
                    carpetSize.actualSize * selectedServices.rate[0].value
                  ).toFixed(2)}
                </strong>
              </h4>
            </div>
          ) : null}
        </div>
      ) : null}

      {selectedCateNames !== null ? (
        <div className="section">
          <div className="form-title">Choose your house</div>

          <div className="input-area">
            {selectedServices.rate
              .filter(
                (rate) =>
                  rate.subcategory.subcategory_name === selectedCateNames
              )
              .map((rate, idx) => (
                <div
                  key={idx}
                  className={`custom-input ${
                    rate.value === formValuesDeep.rate ? "active" : ""
                  }`}
                  onClick={() => {
                    setFormValuesDeep({
                      ...formValuesDeep,
                      rate: rate.value,
                      id: rate.id,
                    });

                    setFormValues({
                      ...formValues,
                      totalPrice: rate.value,
                    });
                  }}
                >
                  <div className="input-indicator"></div>

                  <div className="input-sec">
                    <div
                      className="form-input-label"
                      style={{ textTransform: "capitalize" }}
                    >
                      {rate.value}
                    </div>

                    <p className="description">{rate.field_name}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : null}

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

      {formValues.date.day !== "" ? (
        <div className="section">
          <div className="form-title">
            What time would you like us to start?
          </div>

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

          <p className="arrive">
            Your professional will arrive between {formValues.time}
          </p>
        </div>
      ) : null}

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

export default SinglePageFormComponent;
