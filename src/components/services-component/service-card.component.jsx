import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BookNowContext } from "../../context/book-now/book-now-context";

const ServiceCardComponent = ({ service }) => {
  const { formValues, setFormValues } = useContext(BookNowContext);
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
        navigate(
          `/book-now/${service.service_name.replace(" ", "-").toLowerCase()}`
        );

        setFormValues({
          ...formValues,
          price: service.rate,
          discount: 0,
          perPerson:
            service.professionalrate !== null ? service.professionalrate : 0,
          perHours: service.hourrate !== null ? service.hourrate : 0,
          hourDiscount:
            service.hourdiscount !== null ? service.hourdiscount : 0,
          hourDiscountStart:
            service.hourdiscountstart !== null ? service.hourdiscountstart : 0,
          professionalDiscount:
            service.professionaldiscount !== null
              ? service.professionaldiscount
              : 0,
          professionalDiscountStart:
            service.professionaldiscountstart !== null
              ? service.professionaldiscountstart
              : 0,
        });
      }}
    >
      <div className="icon">
        <img
          src={service.image ? `public/${service.image.medium_image}` : image}
          alt="service-icon"
        />
      </div>

      <h4 className="card-title">{service.service_name}</h4>

      <p className="desc">{newString}</p>
    </div>
  );
};

export default ServiceCardComponent;
