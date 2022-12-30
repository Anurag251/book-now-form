import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const SignInComponent = () => {
  const { signIn, setSignIn } = useContext(BookNowContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignIn({ ...signIn, [name]: value });
  };

  return (
    <div className="sign-in">
      <FormInputComponent
        label="Email Id"
        type="email"
        name="email"
        handleChange={handleChange}
        value={signIn.email}
      />

      <FormInputComponent
        label="Password"
        type="password"
        name="password"
        handleChange={handleChange}
        value={signIn.password}
      />

      <div className="other-option">
        <div className="group">
          <input className="checkbox" id="remember" type="checkbox" />
          <label className="checkbox-label" htmlFor="remember">
            Remember Me
          </label>
        </div>

        <p className="forget-password">Forget Password?</p>
      </div>

      <button className="form-submit-btn">Login</button>
    </div>
  );
};

export default SignInComponent;
