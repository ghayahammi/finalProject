import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import AppNavbar from './AppNavbar';

const mapContainerStyle = {
  width: '100%',
  height: '400px',

};

const center = {
  lat:   36.75208989239942, 
  lng: 10.309603247506315 ,
};

function MapComponent() {
  return (
    <div>
    <AppNavbar/>
 
<p style={{color:"blue"}} >Hello and a warm welcome to our Rent-a-Car destination! We're thrilled to be a part of your travel plans. Utilize the map below to locate us and get a glimpse of the local attractions that await your exploration. Whether you're seeking style, comfort, or adventure, our car rental services have you covered. Ready to roll? Let the map guide you and let us be your partner on the road to memorable experiences!
</p>
<div>
  
    <LoadScript googleMapsApiKey="AIzaSyCV9K2uoVqlgPrLWgtjI_SSjPvwBEivoNg">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
        </div>
  );
}

export default MapComponent;