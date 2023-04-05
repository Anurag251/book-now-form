import React, { useContext } from "react";
import { apis } from "../../apis/apis";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const EmailVerifyComponent = () => {
  const {
    verify,
    setVerify,
    formValues,
    setFormValues,
    message,
    setMessage,
    setInputFieldError,
  } = useContext(BookNowContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setVerify({ ...verify, [name]: value });
  };

  const validateEmailVerify = async (e) => {
    e.preventDefault();
    if (verify.email !== "") {
      setFormValues({
        ...formValues,
        buttonLoading: true,
      });

      await apis
        .post("/forgot-password", {
          email: verify.email,
        })
        .then((res) => {
          if (res.status === 200) {
            sessionStorage.setItem("token", res.data.data);
            setFormValues({
              ...formValues,
              signInSignUpModal: false,
              buttonLoading: false,
            });

            setMessage({
              ...message,
              hidden: true,
              type: "success",
              message: "Please check your <b>Email To Rest Your Password</b>",
            });

            setVerify({
              ...verify,
              email: "",
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
          console.log(err);
          if (err.response.status >= 400) {
            setMessage({
              ...message,
              hidden: true,
              type: "error",
              message: "Invalid Email",
            });

            setFormValues({
              ...formValues,

              buttonLoading: false,
              signInSignUpModal: true,
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
      <form action="" onSubmit={validateEmailVerify}>
        <FormInputComponent
          label="Email"
          type="email"
          name="email"
          handleChange={handleChange}
          value={verify.email}
          required
        />

        <button
          className={`form-submit-btn ${
            formValues.buttonLoading ? "loading" : ""
          }`}
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default EmailVerifyComponent;
