import React, { useContext, useState } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import SignInComponent from "./sign-in.component";
import SignUpComponent from "./sign-up.component";

const SignInAndSignUpModalComponent = () => {
  const { formValues, setFormValues, message, inputFieldError } =
    useContext(BookNowContext);

  return (
    <div
      className={`sign-in-and-sign-up-modal ${
        formValues.signInSignUpModal ? "active" : ""
      } ${message.type === "error" || inputFieldError ? "error" : ""}`}
    >
      <div
        className="modal-bg"
        onClick={() =>
          setFormValues({ ...formValues, signInSignUpModal: false })
        }
      ></div>

      <div className="modal-contailer">
        <div
          className="modal-close-btn"
          onClick={() =>
            setFormValues({ ...formValues, signInSignUpModal: false })
          }
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="modal-title">
          {formValues.isSignIn ? "Login" : "Register"}
        </div>

        <div className="modal-body">
          {formValues.isSignIn ? <SignInComponent /> : <SignUpComponent />}
        </div>

        <div className="switch-page-btn">
          {formValues.isSignIn ? (
            <p>
              New To Book4clean?
              <button
                className="switch"
                onClick={() =>
                  setFormValues({ ...formValues, isSignIn: false })
                }
              >
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                className="switch"
                onClick={() => setFormValues({ ...formValues, isSignIn: true })}
              >
                Login
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUpModalComponent;
