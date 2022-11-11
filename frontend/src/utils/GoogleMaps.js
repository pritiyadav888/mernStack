// import { useMemo } from "react"
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

// export default function GoogleMaps(props){
//     const defaultProps = {
//         lat: 44,
//         lng: -80

//     }
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyBP2XRevrwf72UGeuP1uPF03rTQocRgAHI"
//     });

//     if(!isLoaded) return <div>Loading...</div>;
//     return <Map lat={44} lng={-88} />
// }

// function Map(props) {
//     const center = useMemo(() =>({lat: props.lat, lng: props.lng}), []);

//     return(
//         <GoogleMap zoom={10} center={center} style={{width: '100%',
//         height: '100%'}} >
//             <Marker position={center} />
//         </GoogleMap>
//     );
// }

// import React, { useState, useEffect} from "react";
// import GoogleMapReact from 'google-map-react';
// import Geocode from "react-geocode";




// // set response region. Its optional.
// // A Geocoding request with region=es (Spain) will return the Spanish city.
// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// export default function GoogleMaps(props){
//   const defaultProps = {
//     center: {
//       lat: 43,
//       lng: -80
//     },
//     zoom: 11
//   };

//   const [latitude, setLatitude] = useState(1);
//   const [longitude, setLongitude] = useState(1)

//   useEffect(() => {

//   // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
//   Geocode.setApiKey("AIzaSyD3NXsaIG1fgcGt7Qwh-SeTh08jKkjLsXA");

//   // set response language. Defaults to english.
//   Geocode.setLanguage("en");
//   // set response region. Its optional.
//   // A Geocoding request with region=es (Spain) will return the Spanish city.
//   Geocode.setRegion("ca");

//       // Get latitude & longitude from address.
//   Geocode.fromAddress(props.address).then(
//     (response) => {
//       setLatitude(response.results[0].geometry.location.lat);
//       setLongitude(response.results[0].geometry.location.lng)
//       console.log(latitude, longitude);
//       this.setState({center: {lat: latitude, lng: longitude}})
//     },
//     (error) => {
//       console.error(error);
//     })
// });
 
//   return (
//     // Important! Always set the container height explicitly
//     <div style={{ height: '600px', width: '1600px' }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyBP2XRevrwf72UGeuP1uPF03rTQocRgAHI" }}
//         defaultCenter={defaultProps.center}
//         defaultZoom={defaultProps.zoom}
//         center={{lat: latitude, lng: longitude}}
//         zoom={12}
//       >
//         <Marker
//            position={{lat: latitude, lng: longitude}}
//            name="Store Location"
//         />
//       </GoogleMapReact>
//     </div>
//   );
// }



import React, { useState, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, useLoadScript } from '@react-google-maps/api';
import Geocode from "react-geocode";

const containerStyle = {
  width: '400px',
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