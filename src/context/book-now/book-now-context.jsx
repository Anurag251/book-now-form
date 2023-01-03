import { createContext, useEffect, useState } from "react";

import image from "../../assets/images/user.png";
import image2 from "../../assets/images/user2.png";
import image3 from "../../assets/images/user3.jpeg";
import image4 from "../../assets/images/user4.jpeg";
import image5 from "../../assets/images/user5.png";

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

    date: {
      day: "Sun",
      date: "01",
      month: "Jan",
    },
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

  const [bookingData, setBookingData] = useState([
    {
      id: 2,
      name: "Roy",
      rating: 5.6,
      imageUrl: image,
    },

    {
      id: 3,
      name: "Emiliana",
      rating: 3.2,
      imageUrl: image2,
    },

    {
      id: 4,
      name: "Daisy",
      rating: 4.2,
      imageUrl: image3,
    },

    {
      id: 5,
      name: "Apsara",
      rating: 3.2,
      imageUrl: image4,
    },

    {
      id: 6,
      name: "Dolphin",
      rating: 7.2,
      imageUrl: image5,
    },

    {
      id: 7,
      name: "Shark",
      rating: 9.4,
      imageUrl: image,
    },

    {
      id: 8,
      name: "Snake",
      rating: 5.8,
      imageUrl: image2,
    },

    {
      id: 9,
      name: "Dragon",
      rating: 5.2,
      imageUrl: image3,
    },

    {
      id: 10,
      name: "Tom",
      rating: 5.2,
      imageUrl: image4,
    },
  ]);

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
        bookingData,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
