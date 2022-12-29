import React from "react";
import { useLocation } from "react-router-dom";

const ProgressBarComponent = () => {
  const { pathname } = useLocation();

  return (
    <div className="progress-bar">
      <ul>
        <li
          className={`step ${
            pathname === "/service-details" || pathname === "/date-time"
              ? "done"
              : ""
          } ${pathname === "/" ? "active" : ""}`}
        >
          <span></span>
          <p>Frequency</p>
        </li>

        <div
          className={`line ${
            pathname === "/service-details" || pathname === "/date-time"
              ? "done"
              : ""
          } ${pathname === "/" ? "active" : ""}`}
        ></div>

        <li
          className={`step ${pathname === "/date-time" ? "done" : ""} ${
            pathname === "/service-details" ? "active" : ""
          }`}
        >
          <span></span>
          <p>Service Details</p>
        </li>

        <div
          className={`line ${pathname === "/date-time" ? "done" : ""} ${
            pathname === "/service-details" ? "active" : ""
          }`}
        ></div>

        <li
          className={`step ${pathname === "/service-datails" ? "done" : ""} ${
            pathname === "/date-time" ? "active" : ""
          }`}
        >
          <span></span>
          <p> Date & Time</p>
        </li>

        <div
          className={`line ${pathname === "/checkout" ? "done" : ""} ${
            pathname === "/date-time" ? "active" : ""
          }`}
        ></div>

        <li
          className={`step ${pathname === "/service-datails" ? "done" : ""} ${
            pathname === "/checkout" ? "active" : ""
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
