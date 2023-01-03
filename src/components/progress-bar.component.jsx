import React from "react";

const ProgressBarComponent = ({ currentPosition }) => {
  return (
    <div className="progress-bar">
      <ul>
        <li
          className={`step ${currentPosition >= 33.33 ? "done" : ""} ${
            currentPosition === 0 ? "active" : ""
          }`}
        >
          <span></span>
          <p>Frequency</p>
        </li>

        <div
          className={`line ${currentPosition >= 33.33 ? "done" : ""} ${
            currentPosition === 0 ? "active" : ""
          }`}
        ></div>

        <li
          className={`step ${currentPosition >= 66.66 ? "done" : ""} ${
            currentPosition === 33.33 ? "active" : ""
          }`}
        >
          <span></span>
          <p>Service Details</p>
        </li>

        <div
          className={`line ${currentPosition >= 66.66 ? "done" : ""} ${
            currentPosition === 33.33 ? "active" : ""
          }`}
        ></div>

        <li
          className={`step ${currentPosition >= 99.99 ? "done" : ""} ${
            currentPosition === 66.66 ? "active" : ""
          }`}
        >
          <span></span>
          <p> Date & Time</p>
        </li>

        <div
          className={`line ${currentPosition >= 99.99 ? "done" : ""} ${
            currentPosition === 66.66 ? "active" : ""
          }`}
        ></div>

        <li
          className={`step ${currentPosition >= 133.32 ? "done" : ""} ${
            currentPosition === 99.99 ? "active" : ""
          }`}
        >
          <span></span>
          <p>Checkout</p>
        </li>
      </ul>
    </div>
  );
};

export default ProgressBarComponent;
