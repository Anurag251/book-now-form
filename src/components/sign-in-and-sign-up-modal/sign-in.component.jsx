import React, { useContext } from "react";
import { apis } from "../../apis/apis";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";
import { useNavigate } from "react-router-dom";

const SignInComponent = () => {
  const {
    signIn,
    setSignIn,
    formValues,
    setFormValues,
    message,
    setMessage,
    setInputFieldError,
  } = useContext(BookNowContext);

  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;

    setSignIn({ ...signIn, [name]: value });
  };

  const validateSignIn = (e) => {
    e.preventDefault();
    if (signIn.email !== "" && signIn.password !== "") {
      setFormValues({
        ...formValues,
        buttonLoading: true,
      });

      apis
        .post("/login", {
          email: signIn.email,
          password: signIn.password,
        })
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("token", res.data.data);

            setFormValues({
              ...formValues,
              token: res.data.data,
              currentUser: true,
              signInSignUpModal: false,
              buttonLoading: false,
            });

            setMessage({
              ...message,
              hidden: true,
              type: "success",
              message: res.data.message,
            });

            setTimeout(() => {
              setMessage({
                ...message,
                hidden: false,
                type: "",
                message: "",
              });

            }, 4000);
            navigate('/')
            location.reload();
          } else {
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
          }
        })
        .catch((err) => {
          if (err.response.status === 400) {
            setMessage({
              ...message,
              hidden: true,
              type: "error",
              message:
                "Email or Password is incorrect please check and try again",
            });

            setFormValues({
              ...formValues,

              buttonLoading: false,
              signInSignUpModal: true,
              isSignIn: "Login",
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
        });
    } else {
      setInputFieldError("All field are required");

      setTimeout(() => {
        setInputFieldError("");
      }, 3000);
    }
  };

  return (
    <div className="sign-in">
      <form action="" onSubmit={validateSignIn}>
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
          password
        />

        <div className="other-option">
          <div className="group">
            <input className="checkbox" id="remember" type="checkbox" />
            <label className="checkbox-label" htmlFor="remember">
              Remember Me
            </label>
          </div>

          <p
            className="forget-password"
            onClick={() =>
              setFormValues({ ...formValues, isSignIn: "VerifyEmail" })
            }
          >
            Forget Password?
          </p>
        </div>

        <button
          className={`form-submit-btn ${
            formValues.buttonLoading ? "loading" : ""
          }`}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignInComponent;
