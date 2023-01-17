import { createContext, useEffect, useState } from "react";
import { apis } from "../../apis/apis";

import image1 from "../../assets/images/user.png";
import image2 from "../../assets/images/user2.png";
import image3 from "../../assets/images/user3.jpeg";
import image4 from "../../assets/images/user4.jpeg";
import image5 from "../../assets/images/user5.png";

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
      name: "",
      price: 0,
      discount: 0,
      perPerson: 0,
      perHours: 0,
    },

    address: "",
    hours: 0,
    noOfProfessional: 0,
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

  const [selectedService, setSelectedService] = useState({
    id: null,
    title: "Hello Worlds",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nulla totam voluptatibus quo aliquid sequi sit, modi natus asperiores enim tempora commodi aperiam iure impedit alias illum iste sed quas",
    professional: [
      {
        id: 1,
        name: "Sumi Maharjan",
        time: 4,
        date: 2,
        image: image1,
        rating: 3,
      },
      {
        id: 2,
        name: "Sumi Maharjan",
        time: 10,
        date: 3,
        image: image2,
        rating: 4,
      },
      {
        id: 3,
        name: "Sumi Maharjan",
        time: 4,
        date: 5,
        image: image3,
        rating: 5,
      },
    ],
    materialsPrice: 30,
    frequency: [
      {
        id: 1,
        title: "Bi-weekly",
        desc: "Book a recurring cleaning with the same professional every two-weeks",
        discount: 10,
        perPerson: 60,
        perHours: 30,
      },
      {
        id: 2,
        title: "Bi-weekly",
        desc: "Book a recurring cleaning with the same professional every two-weeks",
        discount: 20,
        perPerson: 70,
        perHours: 20,
      },
    ],
  });

  const [services, setServices] = useState([]);

  const [loadingPage, setLoadingPage] = useState(false);

  useEffect(() => {
    const { frequency, hours, noOfProfessional, materials, materialPrice } =
      formValues;

    let pricePerHours =
      (hours - 1) *
        (noOfProfessional !== 0 ? noOfProfessional : 1) *
        frequency.perHours +
      frequency.price;

    let pricePerProfessional =
      noOfProfessional * frequency.perPerson + pricePerHours;

    let allTotalPrice =
      (materials === "Yes" ? parseInt(materialPrice) : 0) +
      pricePerProfessional;

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

    setLoadingPage(true);

    apis
      .get("/services")
      .then((res) => {
        if (res.status === 200) {
          setLoadingPage(false);
          setServices(res.data.data.service);
          console.log(res.data.data.service);
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
        price: 0,
        discount: 0,
        perPerson: 0,
        perHours: 0,
      },

      address: "",
      hours: 0,
      noOfProfessional: 0,
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
      time: "08:00-08:30",
      totalPrice: 0,
    });
  };

  let hello = {
    "service_id": 10,
    "frequency_id": 3,
    "address": "test",
    "working_hours": 2,
    "professional": 2,
    "cleaning_materials": 200,
    "cleaning_instruction": "test",
    "employee_id": 4,
    "service_date": "2023-01-14",
    "service_time": "8:00-9:00",
    "client_id": 3,
    "total_price": 5000
  }

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
        selectedService,
        setSelectedService,
        selectedServices,
        setSelectedServices,
        loadingPage,
        resetAllBookingData,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
