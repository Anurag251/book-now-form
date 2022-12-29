import React, { useContext } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const HoursModalComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  return (
    <div className={`modal ${formValues.isHoursModalHidden ? "active" : ""}`}>
      <div
        className="modal-bg"
        onClick={() =>
          setFormValues({ ...formValues, isHoursModalHidden: false })
        }
      ></div>

      <div className="modal-contailer">
        <div className="modal-header">
          <div className="modal-title">How long should I book for?</div>
          <div
            className="modal-close-btn"
            onClick={() =>
              setFormValues({ ...formValues, isHoursModalHidden: false })
            }
          >
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="modal-body">
          <p>
            Every house is different, but as a general rule of thumb; each
            bedroom you have will mean an extra hour of cleaning. You can refer
            to the table below:
          </p>

          <table>
            <thead>
              <tr>
                <th>Number of Bedrooms</th>
                <th>Duration of Cleaning*</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Studio</td>
                <td>2 hours</td>
              </tr>

              <tr>
                <td>1 Bedroom</td>
                <td>2-3 hours</td>
              </tr>

              <tr>
                <td>2 Bedrooms</td>
                <td>3-4 hours</td>
              </tr>

              <tr>
                <td>3 Bedrooms</td>
                <td>4-5 hours</td>
              </tr>

              <tr>
                <td>4 Bedrooms</td>
                <td>5-6 hours</td>
              </tr>

              <tr>
                <td>5 Bedrooms</td>
                <td>6-7 hours</td>
              </tr>
            </tbody>
          </table>

          <p>
            *Regular cleaning includes general cleaning, wiping of surfaces,
            dusting, sweeping, mopping, and vacuuming. If you are planning to
            have extra tasks such as cleaning the oven or fridge, wiping blinds,
            or cleaning balcony, we suggest adding an extra 30-45 min per task.
          </p>

          <p>If you live in a villa, we suggest you book an extra hour.</p>

          <p>
            Below is a checklist for a regular cleaning, but you should talk to
            your professional about what you would like done within your home:
          </p>

          <ul>
            <li className="list-title">Kitchen - 30 mins</li>
            <li>Wash dishes</li>
            <li>Wipe sink, countertops</li>
            <li>Wipe kitchen appliances</li>
          </ul>

          <ul>
            <li className="list-title">Bathroom - 30 mins</li>
            <li>Clean bathtub, showers</li>
            <li>Clean toilet, bidet</li>
            <li>Wipe sink, countertops</li>
            <li>Hang/Fold towels</li>
            <li>Clean mirrors</li>
          </ul>

          <ul>
            <li className="list-title">Bedroom - 20 mins</li>
            <li>Make beds</li>
            <li>Fold clothes</li>
            <li>Clear mirrors</li>
          </ul>

          <ul>
            <li className="list-title">General - 40 mins</li>
            <li>Organize items</li>
            <li>Vacuum floors / rug</li>
            <li>Dust down furniture</li>
            <li>Dust down all surfaces</li>
            <li>Wipe light switches</li>
            <li>Wipe door handles</li>
            <li>Wipe window ledges</li>
            <li>Mop floors</li>
            <li>Take out rubbish</li>
          </ul>

          <ul>
            <li className="list-title">
              Extras - add an extra 30-45 mins per task
            </li>
            <li>Do the laundry</li>
            <li>Change sheets, pillowcases</li>
            <li>Clean interior windows</li>
            <li>Clean balcony/patio</li>
            <li>Clean inside cupboards</li>
            <li>Clean inside oven/fridge</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HoursModalComponent;
