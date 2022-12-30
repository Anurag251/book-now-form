import React, { useContext, useEffect } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const SignUpComponent = () => {
  const { signUp, setSignUp } = useContext(BookNowContext);

  // useEffect(() => {

  // }, [])

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUp({ ...signUp, [name]: value });
  };

  return (
    <div className="sign-up">
      <FormInputComponent
        label="Full Name"
        type="text"
        name="fName"
        handleChange={handleChange}
        value={signUp.fName}
      />

      <FormInputComponent
        label="Last Name"
        type="text"
        name="lName"
        handleChange={handleChange}
        value={signUp.lName}
      />

      <FormInputComponent
        label="Phone Number"
        type="number"
        name="phoneNumber"
        handleChange={handleChange}
        value={signUp.phoneNumber}
      />

      <FormInputComponent
        label="Email Id"
        type="email"
        name="email"
        handleChange={handleChange}
        value={signUp.email}
      />

      <FormInputComponent
        label="Password"
        type="password"
        name="password"
        handleChange={handleChange}
        value={signUp.password}
      />

      <button className="form-submit-btn">Register</button>
    </div>
  );
};

export default SignUpComponent;
