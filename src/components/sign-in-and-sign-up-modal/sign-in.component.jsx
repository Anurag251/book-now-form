import React, { useContext } from "react";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const SignInComponent = () => {
  const { signIn, setSignIn, formValues, setFormValues, message, setMessage } =
    useContext(BookNowContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignIn({ ...signIn, [name]: value });
  };

  const validate = () => {
    setFormValues({
      ...formValues,
      buttonLoading: true,
    });

    const formData = new FormData();

    formData.append("email", signIn.email);
    formData.append("password", signIn.password);

    fetch("https://stnepal.com.np/sherpatech/api/v1/login", {
      method: "post",
      body: JSON.stringify({
        email: signIn.email,
        password: signIn.password,
      }),
      headers: {
        mode: "no-cors",
        "access-control-allow-origin": "*",
        "access-control-allow-header": "*",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    })
      .then((res) => {
        if (!res.ok) {
          setMessage({
            ...message,
            hidden: true,
            type: "error",
            message:
              "Email or Password is incorrect please check and try again",
          });

          setTimeout(() => {
            setMessage({
              ...message,
              hidden: false,
              type: "",
              message: "",
            });
          }, 4000);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data !== undefined) {
          localStorage.setItem("token", data.data);
          setFormValues({
            ...formValues,
            currentUser: true,
            signInSignUpModal: false,
            buttonLoading: false,
          });

          setMessage({
            ...message,
            hidden: true,
            type: "success",
            message: data.message,
          });

          setTimeout(() => {
            setMessage({
              ...message,
              hidden: false,
              type: "",
              message: "",
            });
          }, 4000);
        }
      })
      .catch((err) => console.log(err));
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

      <button
        className={`form-submit-btn ${
          formValues.buttonLoading ? "loading" : ""
        }`}
        onClick={validate}
      >
        Login
      </button>
    </div>
  );
};

export default SignInComponent;
