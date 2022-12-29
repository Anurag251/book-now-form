import React, { useContext } from "react";
import { BookNowContext } from "../context/book-now/book-now-context";

const MaterialModalComponent = () => {
  const { formValues, setFormValues } = useContext(BookNowContext);

  return (
    <div
      className={`modal ${formValues.isMaterialModalHidden ? "active" : ""}`}
    >
      <div
        className="modal-bg"
        onClick={() =>
          setFormValues({ ...formValues, isMaterialModalHidden: false })
        }
      ></div>

      <div className="modal-contailer">
        <div className="modal-header">
          <div className="modal-title">What materials should I have?</div>
          <div
            className="modal-close-btn"
            onClick={() =>
              setFormValues({ ...formValues, isMaterialModalHidden: false })
            }
          >
            <i className="fas fa-times"></i>
          </div>
        </div>

        <div className="modal-body">
          <p>
            If you prefer us to bring our cleaning materials, our crew member
            will come with a Justlife Cleaning Kit containing the following
            items:
          </p>

          <table>
            <thead>
              <tr>
                <th>Cleaning Products</th>
                <th>Cleaning Equipment</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Floor cleaner</td>
                <td>Vacuum cleaner</td>
              </tr>

              <tr>
                <td>Toilet cleaner</td>
                <td>Mop</td>
              </tr>

              <tr>
                <td>Multi-purpose cleaner</td>
                <td>Bucket & spinner</td>
              </tr>

              <tr>
                <td>Glass cleaner</td>
                <td>Microfibere cloth</td>
              </tr>

              <tr>
                <td>Cream cleaner</td>
                <td>Sponge cloth</td>
              </tr>

              <tr>
                <td>Wood furtniture polish</td>
                <td>Scouring pad</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MaterialModalComponent;
