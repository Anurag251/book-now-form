import { createContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";

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
      id: 0,
      name: "",
      professionalDiscount: 0,
      professionalDiscountStart: 0,
    },

    price: 0,
    discount: 0,

    perHours: 0,
    hourDiscount: 0,
    hourDiscountStart: 0,

    perPerson: 0,

    address: "",
    hours: 2,
    noOfProfessional: 1,
    materials: "No",
    materialPrice: 0,
    materialPerHour: 5,
    materialsDiscount: 0,
    materialsDiscountStart: 0,
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

  // const [selectedService, setSelectedService] = useState({
  //   id: null,
  //   title: "Hello Worlds",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla totam voluptatibus quo aliquid sequi sit, modi natus asperiores enim tempora commodi aperiam iure impedit alias illum iste sed quas",
  //   professional: [
  //     {
  //       id: 1,
  //       name: "Sumi Maharjan",
  //       time: 4,
  //       date: 2,
  //       image: image1,
  //       rating: 3,
  //     },
  //     {
  //       id: 2,
  //       name: "Sumi Maharjan",
  //       time: 10,
  //       date: 3,
  //       image: image2,
  //       rating: 4,
  //     },
  //     {
  //       id: 3,
  //       name: "Sumi Maharjan",
  //       time: 4,
  //       date: 5,
  //       image: image3,
  //       rating: 5,
  //     },
  //   ],
  //   materialsPrice: 30,
  //   frequency: [
  //     {
  //       id: 1,
  //       title: "Bi-weekly",
  //       desc: "Book a recurring cleaning with the same professional every two-weeks",
  //       discount: 10,
  //       perPerson: 60,
  //       perHours: 30,
  //     },
  //     {
  //       id: 2,
  //       title: "Bi-weekly",
  //       desc: "Book a recurring cleaning with the same professional every two-weeks",
  //       discount: 20,
  //       perPerson: 70,
  //       perHours: 20,
  //     },
  //   ],
  // });

  const [services, setServices] = useState([]);

  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    const {
      frequency,
      hours,
      noOfProfessional,
      materials,
      materialPrice,
      materialPerHour,
      materialsDiscount,
      materialsDiscountStart,
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

    console.log(pricePerProfessional);

    let allTotalPrice =
      (materials === "Yes"
        ? (hours >= materialsDiscountStart
            ? hours * materialPerHour -
              materialPerHour * (materialsDiscount / 100)
            : hours * materialPerHour) + parseInt(materialPrice)
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
      frequency: {
        id: null,
        name: "",
      },

      address: "",
      hours: 2,
      noOfProfessional: 1,
      materials: "No",
      materialPrice: 0,
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
