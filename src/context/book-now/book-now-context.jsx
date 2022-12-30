import { createContext, useEffect, useState } from "react";

export const BookNowContext = createContext();

const BookNowProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    currentUser: "",

    signInSignUpModal: false,
    bookingSummaryHidden: false,
    isHoursModalHidden: false,
    isMaterialModalHidden: false,
    title: "Frequency",

    frequency: {
      id: 1,
      name: "One-Time",
      price: 100,
      discount: 30,
      perPerson: 40,
      perHours: 20,
    },

    address: "",
    hours: 2,
    noOfProfessional: 1,
    materials: "No",
    message: "",

    professional: {
      id: "1",
      name: "Norma",
      rating: "4.9",
      imageUrl: null,
    },

    day: "1",
    time: "08:00-08:30",
    totalPrice: 0,
  });

  const [signUp, setSignUp] = useState({
    fName: "",
    lName: "",
    phoneNumber: "",
    email: "",
    password: "",
  });

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const { frequency, hours, noOfProfessional, materials } = formValues;

    let pricePerHours = (hours - 1) * frequency.perHours + frequency.price;

    let pricePerProfessional =
      noOfProfessional * frequency.perPerson + pricePerHours;

    let allTotalPrice = (materials === "Yes" ? 20 : 0) + pricePerProfessional;

    setFormValues({
      ...formValues,
      totalPrice: allTotalPrice - frequency.perHours - frequency.perPerson,
    });
  }, [
    formValues.frequency.name,
    formValues.hours,
    formValues.noOfProfessional,
    formValues.materials,
  ]);

  return (
    <BookNowContext.Provider
      value={{
        formValues,
        setFormValues,
        signUp,
        setSignUp,
        signIn,
        setSignIn,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
