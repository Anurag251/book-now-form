import { createContext, useState } from "react";

export const BookNowContext = createContext();

const BookNowProvider = ({ children }) => {
  const [formValues, setFormValues] = useState({
    bookingSummaryHidden: false,
    isHoursModalHidden: false,
    isMaterialModalHidden: false,
    title: "Frequency",
    frequency: "One-Time",
    address: "",
    hours: "2",
    noOfProfessional: "1",
    materials: "Yes",
    message: "",
    professional: {
      id: "1",
      name: "Norma",
      rating: "4.9",
      imageUrl: null,
    },
    day: "1",
    time: "08:00-08:30",
  });

  return (
    <BookNowContext.Provider
      value={{
        formValues,
        setFormValues,
      }}
    >
      {children}
    </BookNowContext.Provider>
  );
};

export default BookNowProvider;
