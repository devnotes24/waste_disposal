import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapCard = ({ place }) => {
  const { name, geometry, rating, vicinity, icon } = place;

  const containerStyle = {
    width: '300px',
    height: '200px'
  };

  const center = {
    lat: geometry.location.lat,
    lng: geometry.location.lng
  };

  return (
    <div className="map-card">
      <h3>{name}</h3>
      <LoadScript googleMapsApiKey="AIzaSyCdcf2_kH9AMW5RJQ8IqYx571SIPohc64M">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker position={center} icon={icon} />
        </GoogleMap>
      </LoadScript>
      <div className="card-details">
        <p>Rating: {rating} ★</p>
        <p>Address: {vicinity}</p>
      </div>
    </div>
  );
};

export default MapCard;
