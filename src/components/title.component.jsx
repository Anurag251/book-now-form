import React from "react";

const TitleComponent = ({ title, subTitle, aboutpage }) => {
  return (
    <div className={`title ${aboutpage ? "about-page-title" : ""}`}>
      <h5>{title}</h5>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default TitleComponent;
