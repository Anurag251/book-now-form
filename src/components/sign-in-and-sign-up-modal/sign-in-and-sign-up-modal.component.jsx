import React, { useContext, useState } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import SignInComponent from "./sign-in.component";
import SignUpComponent from "./sign-up.component";

const SignInAndSignUpModalComponent = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const { formValues, setFormValues } = useContext(BookNowContext);

  return (
    <div
      className={`sign-in-and-sign-up-modal ${
        formValues.signInSignUpModal ? "active" : ""
      }`}
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

        <div className="modal-title">{isSignIn ? "Login" : "Register"}</div>

        <div className="modal-body">
          {isSignIn ? <SignInComponent /> : <SignUpComponent />}
        </div>

        <div className="switch-page-btn">
          {isSignIn ? (
            <p>
              New To Justlife?
              <button className="switch" onClick={() => setIsSignIn(false)}>
                Register
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button className="switch" onClick={() => setIsSignIn(true)}>
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
