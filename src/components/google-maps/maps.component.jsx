import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Circle,
  StandaloneSearchBox,
} from "@react-google-maps/api";

const API_KEY = "AIzaSyATZ0mLzQmPGTCHNj49-KvIhh_RgFZ3mbY";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const available = {
  lat: 25.1903,
  lng: 55.2747,
};

const libraries = ["places"];

const MapsComponent = ({
  setFormValues,
  formValues,
  setSelectedLocation,
  setSelectedLocationError,
}) => {
  const [center, setCenter] = useState({
    lat: 25.1903,
    lng: 55.2747,
  });

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
    libraries: libraries,
  });

  const [searchBox, setSearchBox] = useState(null);
  const [map, setMap] = useState(null);
  const [placeName, setPlaceName] = useState("");
  const [clickPosition, setClickPosition] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    const success = (position) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({ latitude, longitude });
    };

    const error = (error) => {
      console.error(error);
    };

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  useEffect(() => {
    if (currentLocation !== null) {
      setClickPosition({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      });

      setCenter({
        lat: currentLocation.latitude,
        lng: currentLocation.longitude,
      });
    }
  }, [currentLocation]);

  const onMapClick = (event) => {
    if (map) {
      map.panTo(event.latLng);
    }
    setClickPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  useEffect(() => {
    if (!clickPosition) {
      return;
    }

    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${clickPosition.lat},${clickPosition.lng}&key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data !== "") {
          setSelectedLocation(data.results[0].formatted_address);
        }
      });
  }, [clickPosition]);

  const circleOptions = {
    strokeColor: "#42f575",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#42f575",
    fillOpacity: 0.04,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000 * 5, //meters in default but multiply by 1000 to change into km
    zIndex: 2,
  };
  const circleOptions2 = {
    strokeColor: "#ff0000",
    strokeOpacity: 0,
    strokeWeight: 2,
    fillColor: "#ff0000",
    fillOpacity: 0,
    clickable: true,
    draggable: false,
    editable: false,
    visible: true,
    radius: 1000 * 100000, //meters in default but multiply by 1000 to change into km
    zIndex: 1,
  };

  const handlePlacesChanged = () => {
    try {
      const places = searchBox.getPlaces();
      const place = places[0];
      const { lat, lng } = places[0].geometry.location;
      setSelectedPlace(place);
      setClickPosition({ lat: lat(), lng: lng() });
      map.panTo({ lat: lat(), lng: lng() });
      console.log({ lat: lat(), lng: lng() });
    } catch (err) {
      console.log("Location not found");
    }
  };

  const onSearchBoxLoad = React.useCallback(function callback(ref) {
    setSearchBox(ref);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={(map) => {
        setMap(map);
      }}
    >
      <Marker position={clickPosition === null ? center : clickPosition} />

      <Circle
        center={available}
        options={circleOptions}
        onClick={(e) => {
          onMapClick(e);
          setSelectedLocationError(false);
        }}
      />
      <Circle
        center={available}
        onClick={(e) => {
          if (map) {
            map.panTo(available);
          }
          setSelectedLocationError(true);
        }}
        options={circleOptions2}
      />

      <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={handlePlacesChanged}
      >
        <input
          className="googleSearchBox"
          type="text"
          placeholder="Enter location"
        />
      </StandaloneSearchBox>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default MapsComponent;
