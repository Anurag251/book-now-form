import React, { useState } from "react";
import MapsComponent from "./maps.component";

const GoogleMapPopupComponent = () => {
  const [coordinates, setCoordinates] = useState({
    latitude: 0,
    longitatude: 0,
  });

  return (
    <MapsComponent
    // isMarkerShown
    // googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBFYkAz4PzdbGIPiBH7QjcUFC5dui4cSDw"
    // loadingElement={<div style={{ height: `100px` }} />}
    // containerElement={<div style={{ height: `400px` }} />}
    // mapElement={<div style={{ height: `100px` }} />}
    />
  );
};

export default GoogleMapPopupComponent;
