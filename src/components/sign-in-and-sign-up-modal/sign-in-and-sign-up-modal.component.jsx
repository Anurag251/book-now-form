import React, { useContext, useState } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import ChangePasswordComponent from "./change-password.component";
import EditProfileComponent from "./edit-profile.component";
import EmailVerifyComponent from "./email-verify.component";
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
          {formValues.isSignIn === "Login"
            ? "Login"
            : formValues.isSignIn === "Register"
            ? "Register"
            : formValues.isSignIn === "ProfileEdit"
            ? "Profile Edit"
            : formValues.isSignIn === "ChangePassword"
            ? "Change Password"
            : formValues.isSignIn === "VerifyEmail"
            ? "Verify Your Email"
            : null}
        </div>

        <div className="modal-body">
          {formValues.isSignIn === "Login" ? (
            !formValues.currentUser ? (
              <SignInComponent />
            ) : null
          ) : formValues.isSignIn === "Register" ? (
            !formValues.currentUser ? (
              <SignUpComponent />
            ) : null
          ) : formValues.isSignIn === "ProfileEdit" ? (
            <EditProfileComponent />
          ) : formValues.isSignIn === "ChangePassword" ? (
            <ChangePasswordComponent />
          ) : formValues.isSignIn === "VerifyEmail" ? (
            <EmailVerifyComponent />
          ) : null}
        </div>

        <div className="switch-page-btn">
          {formValues.isSignIn === "Login" ? (
            <p>
              New To Book4clean?
              <button
                className="switch"
                onClick={() =>
                  setFormValues({ ...formValues, isSignIn: "Register" })
                }
              >
                Register
              </button>
            </p>
          ) : formValues.isSignIn === "Register" ? (
            <p>
              Already have an account?
              <button
                className="switch"
                onClick={() =>
                  setFormValues({ ...formValues, isSignIn: "Login" })
                }
              >
                Login
              </button>
            </p>
          ) : formValues.isSignIn === "VerifyEmail" ? (
            <p>
              If you remember your password?
              <button
                className="switch"
                onClick={() =>
                  setFormValues({ ...formValues, isSignIn: "Login" })
                }
              >
                Login
              </button>
              <br />
              <b>OR</b>
              <br />
              You can create new account
              <button
                className="switch"
                onClick={() =>
                  setFormValues({ ...formValues, isSignIn: "Register" })
                }
              >
                Register
              </button>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignInAndSignUpModalComponent;
