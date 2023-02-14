import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookNowContext } from "../../context/book-now/book-now-context";

const ServiceCardComponent = ({ service }) => {
  const { formValues, setFormValues, resetAllBookingData } = useContext(BookNowContext);
  const navigate = useNavigate();

  useEffect(() => {}, []);

  const image =
    "https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  let newString = service.description.replace("<p>", "");
  newString = newString.replace("</p>", "");
  newString = newString.replace("<b>", "");
  newString = newString.replace("</b>", "");

  return (
    <div
      className="services-card"
      onClick={() => {
        resetAllBookingData()

        navigate(
          `/book-now/${service.service_name.replace(" ", "-").toLowerCase()}`
        );

        setFormValues({
          ...formValues,
          price: parseInt(service.rate[0].value),
          discount: 0,

          perHours: parseInt(service.rate[1].value),
          perPerson: parseInt(service.rate[2].value),
          hourDiscount: parseInt(service.rate[3].value),
          hourDiscountStart: parseInt(service.rate[4].value),

          materialPrice: parseInt(service.rate[5].value),
          materialPerHour: parseInt(service.rate[6].value),
          materialsCharge: parseInt(service.rate[7].value),
          materialsChargeStart: parseInt(service.rate[8].value),

          professionalDiscount: 0,
          // professionalDiscount:
          //   service.professionaldiscount !== null
          //     ? service.professionaldiscount
          //     : 0,
          professionalDiscountStart: 1,
          // professionalDiscountStart:
          //   service.professionaldiscountstart !== null
          //     ? service.professionaldiscountstart
          //     : 0,
        });
      }}
    >
      <div className="icon">
        <img
          src={service.image ? `${service.image.medium_image}` : image}
          alt="service-icon"
        />
      </div>

      <h4 className="card-title">{service.service_name}</h4>

      <p className="desc">{newString}</p>
    </div>
  );
};

export default ServiceCardComponent;
