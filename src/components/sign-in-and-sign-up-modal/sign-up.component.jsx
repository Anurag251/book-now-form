import React, { useContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const SignUpComponent = () => {
  const {
    signUp,
    setSignUp,
    formValues,
    setFormValues,
    message,
    setMessage,
    removerMessage,
    inputFieldError,
    setInputFieldError,
  } = useContext(BookNowContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUp({ ...signUp, [name]: value });
  };

  const validateSignUp = async (e) => {
    e.preventDefault()
    if (
      signUp.fName !== "" &&
      signUp.lName !== "" &&
      signUp.email !== "" &&
      signUp.phoneNumber !== "" &&
      signUp.address !== "" &&
      signUp.password !== "" &&
      signUp.passwordConfirmation !== ""
    ) {
      setFormValues({
        ...formValues,
        buttonLoading: true,
      });

      await apis
        .post("/signup", {
          first_name: signUp.fName,
          middle_name: signUp.mName,
          last_name: signUp.lName,
          email: signUp.email,
          phone: signUp.phoneNumber,
          address: signUp.address,
          password: signUp.password,
          password_confirmation: signUp.passwordConfirmation,
        })
        .then((res) => {
          if (res.status === 200) {
            setFormValues({
              ...formValues,

              signInSignUpModal: false,
              buttonLoading: false,
            });

            setMessage({
              ...message,
              hidden: true,
              type: "success",
              message: "Go to your email and verify it",
            });

            setTimeout(() => {
              setFormValues({
                ...formValues,

                buttonLoading: false,
                signInSignUpModal: false,
              });

              removerMessage();
            }, 6000);
          }
        })
        .catch((err) => {
          setMessage({
            ...message,
            hidden: true,
            type: "error",
            message: "This email is already taken try another",
          });

          setFormValues({
            ...formValues,

            buttonLoading: false,
          });

          setTimeout(() => {
            removerMessage();
          }, 4000);
        });
    } else {
      setInputFieldError("All field are required");

      setTimeout(() => {
        setInputFieldError("");
      }, 3000);
    }
  };

  return (
    <div className="sign-up">
      {inputFieldError !== "" ? (
        <p className="error">{inputFieldError}</p>
      ) : null}

      <form action="" onSubmit={validateSignUp}>
        <FormInputComponent
          label="First Name*"
          type="text"
          name="fName"
          handleChange={handleChange}
          value={signUp.fName}
          required
        />

        <FormInputComponent
          label="Middle Name"
          type="text"
          name="mName"
          handleChange={handleChange}
          value={signUp.mName}
        />

        <FormInputComponent
          label="Last Name*"
          type="text"
          name="lName"
          handleChange={handleChange}
          value={signUp.lName}
          required
        />

        <FormInputComponent
          label="Phone Number*"
          type="number"
          name="phoneNumber"
          handleChange={handleChange}
          value={signUp.phoneNumber}
        />

        <FormInputComponent
          label="Email Id*"
          type="email"
          name="email"
          handleChange={handleChange}
          value={signUp.email}
          required
        />

        <FormInputComponent
          label="Address*"
          type="text"
          name="address"
          handleChange={handleChange}
          value={signUp.address}
          required
        />

        <FormInputComponent
          label="Password*"
          type="password"
          name="password"
          handleChange={handleChange}
          value={signUp.password}
          password
          required
        />

        <FormInputComponent
          label="Confirm Password*"
          type="password"
          name="passwordConfirmation"
          handleChange={handleChange}
          value={signUp.passwordConfirmation}
          password
          required
        />

        <button
          className={`form-submit-btn ${
            formValues.buttonLoading ? "loading" : ""
          }`}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUpComponent;
