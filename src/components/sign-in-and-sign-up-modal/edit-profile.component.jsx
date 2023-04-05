import React, { useContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";
import { BookNowContext } from "../../context/book-now/book-now-context";
import FormInputComponent from "./form-input.component";

const EditProfileComponent = () => {
  const {
    formValues,
    setFormValues,
    message,
    setMessage,
    removerMessage,
    inputFieldError,
    setInputFieldError,
    currentUserDatails,
    updateProfile,
    setUpdateProfile,
    someChanges,
    setSomeChanges,
  } = useContext(BookNowContext);

  // console.log(currentUserDatails);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUpdateProfile({ ...updateProfile, [name]: value });
  };

  useEffect(() => {
    setUpdateProfile({
      ...updateProfile,
      fName:
        currentUserDatails.first_name !== null
          ? currentUserDatails.first_name
          : "",
      mName:
        currentUserDatails.middle_name !== null
          ? currentUserDatails.middle_name
          : "",
      lName:
        currentUserDatails.last_name !== null
          ? currentUserDatails.last_name
          : "",
      phoneNumber:
        currentUserDatails.phone !== null ? currentUserDatails.phone : "",
      address:
        currentUserDatails.address !== null ? currentUserDatails.address : "",
    });
  }, []);

  const validateEditProfile = async (e) => {
    e.preventDefault();
    setFormValues({
      ...formValues,
      buttonLoading: true,
    });

    if (currentUserDatails !== null) {
      await apis
        .post(`/user/update/${currentUserDatails.id}`, {
          first_name: updateProfile.fName,
          middle_name: updateProfile.mName || '',
          last_name: updateProfile.lName,
          phone: updateProfile.phoneNumber,
          address: updateProfile.address,
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
              message: "Update Profile",
            });

            setTimeout(() => {
              setFormValues({
                ...formValues,

                buttonLoading: false,
                signInSignUpModal: false,
              });

              removerMessage();
            }, 4000);

            setSomeChanges(!someChanges);
          }
        })
        .catch((err) => {
          setMessage({
            ...message,
            hidden: true,
            type: "error",
            message: "Something went wrong",
          });

          setFormValues({
            ...formValues,

            buttonLoading: false,
          });

          setTimeout(() => {
            removerMessage();
          }, 4000);
        });
    }
  };

  return (
    <div className="sign-up">
      {inputFieldError !== "" ? (
        <p className="error">{inputFieldError}</p>
      ) : null}

      <form action="" onSubmit={validateEditProfile}>
        <FormInputComponent
          label="Full Name*"
          type="text"
          name="fName"
          handleChange={handleChange}
          value={updateProfile.fName}
        />

        <FormInputComponent
          label="Middle Name"
          type="text"
          name="mName"
          handleChange={handleChange}
          value={updateProfile.mName}
        />

        <FormInputComponent
          label="Last Name*"
          type="text"
          name="lName"
          handleChange={handleChange}
          value={updateProfile.lName}
        />

        <FormInputComponent
          label="Phone Number*"
          type="number"
          name="phoneNumber"
          handleChange={handleChange}
          value={updateProfile.phoneNumber}
        />

        <FormInputComponent
          label="Address*"
          type="text"
          name="address"
          handleChange={handleChange}
          value={updateProfile.address}
        />

        <button
          className={`form-submit-btn ${
            formValues.buttonLoading ? "loading" : ""
          }`}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default EditProfileComponent;
