import { createContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";

export const BookNowContext = createContext();

const BookNowProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    token: "",
    layout: "",
    currentUser: false,
    currentPath: "/",

    googleMapPopup: false,

    isSignIn: null,
    signInSignUpModal: false,
    bookingSummaryHidden: false,
    isHoursModalHidden: false,
    isMaterialModalHidden: false,
    buttonLoading: false,
    buttonLoading1: false,

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
    noOfProfessional: 0,

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
      year: "",
    },

    time: "",
    totalPrice: 0,
  });

  const [formValuesDeep, setFormValuesDeep] = useState({
    id: 0,
    category: "",
    rate: 0,
    date: "",
    time: "",
    message: "",
    address: "",
  });

  const [formValuesSofa, setFormValuesSofa] = useState({
    id: 0,
    category: "",
    rate: 0,
    addRate: 0,
    quantity: 0,
    date: "",
    time: "",
    message: "",
    address: "",
    totalPrice: 0,
  });

  const [formValuesCarpet, setFormValuesCarpet] = useState({
    id: 0,
    category: "",
    rate: 0,
    addRate: 0,
    value: 0,
    date: "",
    time: "",
    message: "",
    address: "",
    totalPrice: 0,
  });

  const [allBookedData, setAllBookedData] = useState({
    serviceTitle: "",

    frequency: "",

    address: "",
    apartmentDetails: "",
    hours: "",
    noOfProfessional: "",

    professional: "",
    date: "",
    time: "",

    materials: "",

    total: "",
  });

  const [goCheckout, setGoCheckout] = useState(false);

  const [bookedSummary, setBookedSummary] = useState(false);

  const [endTime, setEndTime] = useState("");

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

  const [updateProfile, setUpdateProfile] = useState({
    fName: "",
    mName: "",
    lName: "",
    phoneNumber: "",
    address: "",
  });

  const [signIn, setSignIn] = useState({
    email: "",
    password: "",
  });

  const [changePassword, setChangePassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState({
    hidden: false,
    type: "",
    message: "",
  });

  const [currentUserDatails, setCurrentUserDatails] = useState(null);

  const [selectedServices, setSelectedServices] = useState(null);

  const [services, setServices] = useState([]);

  const [loadingPage, setLoadingPage] = useState(false);

  const [someChanges, setSomeChanges] = useState(false);

  const [verify, setVerify] = useState({
    email: "",
  });

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

    // let pricePerHours =
    //   (hours >= formValues.hourDiscountStart
    //     ? hours * formValues.perHours -
    //       formValues.perHours * (formValues.hourDiscount / 100)
    //     : hours * formValues.perHours) + formValues.price;

    let pricePerHours = hours * formValues.perHours;

    let pricePerProfessional =
      noOfProfessional * pricePerHours + formValues.perPerson;

    let allTotalPrice =
      (materials === "Yes"
        ? (hours >= materialsChargeStart
            ? hours * materialPerHour * noOfProfessional
            : hours * materialsCharge * noOfProfessional) +
          parseInt(materialPrice)
        : 0) + pricePerProfessional;

    setFormValues({
      ...formValues,
      totalPrice: allTotalPrice,
    });
  }, [
    formValues.frequency.name,
    formValues.hours,
    formValues.noOfProfessional,
    formValues.materials,
  ]);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
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
    setFormValuesDeep({
      ...formValuesDeep,
      id: 0,
      category: "",
      rate: 0,
      date: "",
      time: "",
      message: "",
      address: "",
    });

    setFormValuesSofa({
      ...formValuesSofa,
      id: 0,
      category: "",
      rate: 0,
      addRate: 0,
      quantity: 0,
      date: "",
      time: "",
      message: "",
      address: "",
      totalPrice: 0,
    });

    setFormValuesCarpet({
      ...formValuesCarpet,
      id: 0,
      category: "",
      rate: 0,
      addRate: 0,
      value: 0,
      date: "",
      time: "",
      message: "",
      address: "",
      totalPrice: 0,
    });

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
      noOfProfessional: 0,
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
        year: "",
      },
      time: "",
      totalPrice: 0,
    });
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      fetch("https://admin.book4clean.com/api/v1/user/me", {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setCurrentUserDatails(data.data);
          } else {
            sessionStorage.removeItem("token");
            setFormValues({ ...formValues, currentUser: false });
          }
        });
    }
  }, [formValues.currentUser, someChanges]);

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
        formValuesDeep,
        setFormValuesDeep,
        formValuesSofa,
        setFormValuesSofa,
        formValuesCarpet,
        setFormValuesCarpet,
        changePassword,
        setChangePassword,
        currentUserDatails,
        setCurrentUserDatails,
        updateProfile,
        setUpdateProfile,
        someChanges,
        setSomeChanges,
        verify,
        setVerify,
        allBookedData,
        setAllBookedData,
        bookedSummary,
        setBookedSummary,
        endTime,
        setEndTime,
        goCheckout,
        setGoCheckout,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
