import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const UserMap = (props) => {
  return (
    <Map
      google={props.google}
      initialCenter={{
        lat: props.lat,
        lng: props.lng
      }}
      zoom={15}
    ></Map>
  );
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAP_API
})(UserMap)
