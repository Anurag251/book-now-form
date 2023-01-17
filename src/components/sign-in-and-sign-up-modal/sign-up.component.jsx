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
  } = useContext(BookNowContext);
  const [inputFieldError, setInputFieldError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignUp({ ...signUp, [name]: value });
  };

  const validate = async () => {
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
              message: "Sign Up Success Redirecting to Login",
            });

            setTimeout(() => {
              setFormValues({
                ...formValues,

                buttonLoading: false,
                signInSignUpModal: true,
                isSignIn: true,
              });

              removerMessage();
            }, 4000);
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

      // fetch("https://stnepal.com.np/sherpatech/api/v1/signup", {
      //   method: "post",
      //   body: JSON.stringify({
      //     first_name: signUp.fName,
      //     middle_name: signUp.mName,
      //     last_name: signUp.lName,
      //     email: signUp.email,
      //     phone: signUp.phoneNumber,
      //     address: signUp.address,
      //     password: signUp.password,
      //     password_confirmation: signUp.passwordConfirmation,
      //   }),
      //   headers: {
      //     mode: "no-cors",
      //     "access-control-allow-origin": "*",
      //     "access-control-allow-header": "*",
      //     "Content-Type": "application/json",
      //   },
      //   redirect: "follow",
      // })
      //   .then((res) => {
      //     if (!res.ok) {
      //       setMessage({
      //         ...message,
      //         hidden: true,
      //         type: "error",
      //         message: "This email is already taken",
      //       });

      //       setTimeout(() => {
      //         setMessage({
      //           ...message,
      //           hidden: false,
      //           type: "",
      //           message: "",
      //         });
      //       }, 4000);
      //     } else {
      //       return res.json();
      //     }
      //   })
      //   .then((data) => {
      //     console.log(data);
      //     if (data !== undefined) {
      //       setFormValues({
      //         ...formValues,

      //         signInSignUpModal: false,
      //         buttonLoading: false,
      //       });

      //       setMessage({
      //         ...message,
      //         hidden: true,
      //         type: "success",
      //         message: "Sign Up Success Please Login",
      //       });

      //       setTimeout(() => {
      //         setFormValues({
      //           ...formValues,

      //           buttonLoading: false,

      //           signInSignUpModal: true,
      //           isSignIn: true,
      //         });

      //         setMessage({
      //           ...message,
      //           hidden: false,
      //           type: "",
      //           message: "",
      //         });
      //       }, 4000);
      //     }
      //   })
      //   .catch((err) => console.log(err));
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

      <FormInputComponent
        label="Full Name*"
        type="text"
        name="fName"
        handleChange={handleChange}
        value={signUp.fName}
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
      />

      <FormInputComponent
        label="Address*"
        type="text"
        name="address"
        handleChange={handleChange}
        value={signUp.address}
      />

      <FormInputComponent
        label="Password*"
        type="password"
        name="password"
        handleChange={handleChange}
        value={signUp.password}
      />

      <FormInputComponent
        label="Confirm Password*"
        type="password"
        name="passwordConfirmation"
        handleChange={handleChange}
        value={signUp.passwordConfirmation}
      />

      <button
        className={`form-submit-btn ${
          formValues.buttonLoading ? "loading" : ""
        }`}
        onClick={validate}
      >
        Register
      </button>
    </div>
  );
};

export default SignUpComponent;
