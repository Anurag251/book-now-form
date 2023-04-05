import React, { useContext } from "react";
import { apis } from "../../apis/apis";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const ChangePasswordComponent = () => {
  const {
    changePassword,
    setChangePassword,
    formValues,
    setFormValues,
    message,
    setMessage,
    setInputFieldError,
  } = useContext(BookNowContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setChangePassword({ ...changePassword, [name]: value });
  };

  const validateChangePassword = async (e) => {
    e.preventDefault();
    if (
      changePassword.oldPassword !== "" &&
      changePassword.newPassword !== "" &&
      changePassword.confirmPassword !== ""
    ) {
      setFormValues({
        ...formValues,
        buttonLoading: true,
      });

      await apis
        .post("/user/change-password", {
          old_password: changePassword.oldPassword,
          password: changePassword.newPassword,
          password_confirmation: changePassword.confirmPassword,
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
              message: res.data.message,
            });

            setChangePassword({
              ...changePassword,
              oldPassword: "",
              newPassword: "",
              confirmPassword: "",
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
              message: "Old Password is Incorrect, Please Try again!",
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
              message: "Old Password is Incorrect, Please Try again!",
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
      <form action="" onSubmit={validateChangePassword}>
        <FormInputComponent
          label="Old Password"
          type="password"
          name="oldPassword"
          handleChange={handleChange}
          value={changePassword.oldPassword}
          password
        />

        <FormInputComponent
          label="New Password"
          type="password"
          name="newPassword"
          handleChange={handleChange}
          value={changePassword.newPassword}
          password
        />

        <FormInputComponent
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={changePassword.confirmPassword}
          password
        />

        <button
          className={`form-submit-btn ${
            formValues.buttonLoading ? "loading" : ""
          }`}
        >
          Change
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordComponent;
