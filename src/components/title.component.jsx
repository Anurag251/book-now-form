import React from "react";

const TitleComponent = ({ title, subTitle }) => {
  return (
    <div className="title">
      <h5>{title}</h5>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default TitleComponent;
