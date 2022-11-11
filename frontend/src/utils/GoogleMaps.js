import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '100%',
  height: '400px'
};



function GoogleMaps(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBP2XRevrwf72UGeuP1uPF03rTQocRgAHI"
  })


  const [latitude, setLatitude] = useState(1)
  const [longitude, setLongitude] = useState(1)


  useEffect(() => {

  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey("AIzaSyD3NXsaIG1fgcGt7Qwh-SeTh08jKkjLsXA");

  // set response language. Defaults to english.
  Geocode.setLanguage("en");
  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion("ca");

      // Get latitude & longitude from address.
  Geocode.fromAddress(props.address).then(
    (response) => {
      setLatitude(response.results[0].geometry.location.lat);
      setLongitude(response.results[0].geometry.location.lng)
      console.log(latitude, longitude);
    },
    (error) => {
      console.error(error);
    })
});

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: latitude, lng: longitude}}
        zoom={17}
      >
       <Marker 
        position={{lat: latitude, lng: longitude}}
       />

        <></>
      </GoogleMap>
  ) : <></>
}

export default GoogleMaps