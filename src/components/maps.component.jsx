// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker,
// } from "react-google-maps";

// const MapsComponent = withScriptjs(
//   withGoogleMap((props) => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//       {props.isMarkerShown && (
//         <Marker position={{ lat: -34.397, lng: 150.644 }} />
//       )}
//     </GoogleMap>
//   ))
// );

// export default MapsComponent;

import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const Map = () => {
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={{
        lat: parseFloat(27.7172),
        lng: parseFloat(85.324),
      }}
    >
      <Marker
        position={{
          lat: parseFloat(27.7172),
          lng: parseFloat(85.324),
        }}
        icon={{
          url: mapMarker,
          scaledSize: new window.google.maps.Size(50, 50),
        }}
      />

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0],
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const MapWrapped = withScriptjs(withGoogleMap(Map));

const MapsComponent = () => {
  return (
    <div style={{ width: "100%", height: "90vh" }}>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCGECWznWSCQ549iFBn5iTSsrArTYj3dy4`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default MapsComponent;
