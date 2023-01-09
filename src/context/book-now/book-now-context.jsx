import { createContext, useEffect, useState } from "react";

export const BookNowContext = createContext();

const BookNowProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    currentUser: false,
    currentPath: "/",

    isSignIn: null,
    signInSignUpModal: false,
    bookingSummaryHidden: false,
    isHoursModalHidden: false,
    isMaterialModalHidden: false,
    buttonLoading: false,

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
    mName: "",
    lName: "",
    email: "",
    phoneNumber: "",
    address: "",
    password: "",
    passwordConfirmation: "",
  });

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    hidden: false,
    type: "",
    message: "",
  });

  const [employees, setEmployees] = useState([]);

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

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setFormValues({ ...formValues, currentUser: true });
    } else {
      setFormValues({ ...formValues, currentUser: false });
    }
  }, []);

  useEffect(() => {
    fetch("https://stnepal.com.np/sherpatech/api/v1/employees")
      .then((res) => res.json())
      .then((data) => {
        setEmployees(data.data.employee_details);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <BookNowContext.Provider
      value={{
        formValues,
        setFormValues,
        signUp,
        setSignUp,
        signIn,
        setSignIn,
        employees,
        setMessage,
        message,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
