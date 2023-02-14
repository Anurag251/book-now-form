import React from "react";

const SinglePageFormComponent = () => {
  return (
    <div className="single-page-form">
      <div className="form-title">How often do you need your professional?</div>

      <div className="section">
        <div className="input-area">
          <div
            className={`custom-input ${1 === 1 ? "active" : ""}`}
            onClick={() => null}
          >
            <div className="input-indicator"></div>

            <div className="input-sec">
              <div className="form-input-label">{"frequency.title"}</div>
              <p className="description">{"frequency.description"}</p>
            </div>
          </div>

          <div
            className={`custom-input ${1 === 1 ? "active" : ""}`}
            onClick={() => null}
          >
            <div className="input-indicator"></div>

            <div className="input-sec">
              <div className="form-input-label">{"frequency.title"}</div>
              <p className="description">{"frequency.description"}</p>
            </div>
          </div>

          <div
            className={`custom-input ${1 === 1 ? "active" : ""}`}
            onClick={() => null}
          >
            <div className="input-indicator"></div>

            <div className="input-sec">
              <div className="form-input-label">{"frequency.title"}</div>
              <p className="description">{"frequency.description"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="form-title">How many professionals do you need?</div>

        <div className="select-button-list">
          <input
            type="button"
            onClick={(e) => null}
            className={`input-button ${1 === 1 ? "active" : ""}`}
            value="1"
          />
        </div>
      </div>

      <select name="" id="">
        <option value=""></option>
        <option value=""></option>
        <option value=""></option>
      </select>
    </div>
  );
};

export default SinglePageFormComponent;
