import { createContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";

export const BookNowContext = createContext();

const BookNowProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    layout: "1",
    currentUser: false,
    currentPath: "/",

    googleMapPopup: false,

    isSignIn: null,
    signInSignUpModal: false,
    bookingSummaryHidden: false,
    isHoursModalHidden: false,
    isMaterialModalHidden: false,
    buttonLoading: false,

    title: "Frequency",

    frequency: {
      id: 0,
      name: "",
    },

    price: 0,
    discount: 0,

    perHours: 0,
    hourDiscount: 0,
    hourDiscountStart: 0,

    perPerson: 0,

    address: "",
    apartmentDetails: "",
    hours: 2,
    noOfProfessional: 1,

    materials: "No",
    materialPrice: 0,
    materialPerHour: 0,
    materialsCharge: 0,
    materialsChargeStart: 0,
    message: "",

    professional: {
      id: "",
      name: "",
      rating: "",
      imageUrl: null,
    },

    date: {
      day: "",
      date: 0,
      month: "",
    },
    time: "",
    totalPrice: 0,
  });

  const [inputFieldError, setInputFieldError] = useState("");

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

  const [selectedServices, setSelectedServices] = useState(null);

  const [services, setServices] = useState([]);

  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    const {
      hours,
      noOfProfessional,
      materials,
      materialPrice,
      materialPerHour,
      materialsCharge,
      materialsChargeStart,
    } = formValues;

    let pricePerHours =
      (hours >= formValues.hourDiscountStart
        ? hours * formValues.perHours -
          formValues.perHours * (formValues.hourDiscount / 100)
        : hours * formValues.perHours) + formValues.price;

    let pricePerProfessional =
      noOfProfessional === 1
        ? noOfProfessional * formValues.perPerson + pricePerHours
        : noOfProfessional * (formValues.perPerson + 20) + pricePerHours;

    // console.log(pricePerProfessional);

    let allTotalPrice =
      (materials === "Yes"
        ? (hours >= materialsChargeStart
            ? hours * materialPerHour
            : hours * materialsCharge) + parseInt(materialPrice)
        : 0) + pricePerProfessional;

    // console.log(allTotalPrice);

    setFormValues({
      ...formValues,
      totalPrice: allTotalPrice - formValues.perHours - formValues.perPerson,
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

    setLoadingPage(true);

    apis
      .get("/services")
      .then((res) => {
        if (res.status === 200) {
          setLoadingPage(false);
          setServices(res.data.data);
        }
      })
      .catch((err) => {
        setLoadingPage(false);
      });
  }, []);

  const removerMessage = () => {
    setMessage({
      ...message,
      hidden: false,
      type: "",
      message: "",
    });
  };

  const resetAllBookingData = () => {
    setFormValues({
      ...formValues,

      price: 0,
      discount: 0,

      perHours: 0,
      perPerson: 0,
      hourDiscount: 0,
      hourDiscountStart: 0,

      materialPrice: 0,
      materialPerHour: 0,
      materialsCharge: 0,
      materialsChargeStart: 0,

      frequency: {
        id: null,
        name: "",
      },

      address: "",
      hours: 2,
      noOfProfessional: 1,
      materials: "No",
      message: "",

      professional: {
        id: "",
        name: "",
        rating: "",
        imageUrl: null,
      },

      date: {
        day: "",
        date: "",
        month: "",
      },
      time: "",
      totalPrice: 0,
    });
  };

  return (
    <BookNowContext.Provider
      value={{
        formValues,
        setFormValues,
        signUp,
        setSignUp,
        signIn,
        setSignIn,
        setMessage,
        message,
        services,
        setServices,
        removerMessage,
        selectedServices,
        setSelectedServices,
        loadingPage,
        resetAllBookingData,
        inputFieldError,
        setInputFieldError,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
