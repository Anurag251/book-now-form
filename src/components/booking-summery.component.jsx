import React, { useContext } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const BookingSummeryComponent = () => {
  const { allBookedData, bookedSummary, setBookedSummary } =
    useContext(BookNowContext);

  return (
    <div className={`booking-summary-popup ${bookedSummary ? "active" : ""}`}>
      <div className="summary-box">
        <div className="section-title">Booked Summary</div>
        <ul className="summary-list">
          <li>
            <div className="name">Service Title</div>
            <div className="value">{allBookedData.serviceTitle}</div>
          </li>

          <li>
            <div className="name">Frequency</div>
            <div className="value">{allBookedData.frequency}</div>
          </li>

          <li>
            <div className="name">Address</div>
            <div className="value">{allBookedData.address}</div>
          </li>

          <li>
            <div className="name">Apartment Details</div>
            <div className="value">{allBookedData.apartmentDetails}</div>
          </li>

          <li>
            <div className="name">Hours</div>
            <div className="value">{allBookedData.hours}</div>
          </li>

          <li>
            <div className="name">No of Professional</div>
            <div className="value">{allBookedData.noOfProfessional}</div>
          </li>

          <li>
            <div className="name">Professional</div>
            <div className="value">{allBookedData.professional}</div>
          </li>

          <li>
            <div className="name">Date</div>
            <div className="value">{allBookedData.date}</div>
          </li>

          <li>
            <div className="name">Time</div>
            <div className="value">{allBookedData.time}</div>
          </li>

          <li>
            <div className="name">Material</div>
            <div className="value">{allBookedData.materials}</div>
          </li>

          <li>
            <div className="name">Total</div>
            <div className="value">{allBookedData.total}</div>
          </li>
        </ul>

        <div
          className="button-continue"
          onClick={() => setBookedSummary(false)}
        >
          <button className="continue">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default BookingSummeryComponent;
