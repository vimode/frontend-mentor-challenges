import { useEffect } from "react";

import styled from "styled-components";

import { MapWrapper } from "./MapData.styles";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'



function MapData ({IPinfo}) {

// default location
  const location = [51.505, -0.09]
  const zoomLevel = 13;

  if (IPinfo) {
    location[0] = IPinfo.lat;
    location[1] = IPinfo.long
  } 


  //flyTo Map method tot update the map view when co-ordinates change
  //https://leafletjs.com/reference.html#map-flyto
  function FlyToNewLocation() {
    const map = useMap()
    map.flyTo(location, zoomLevel, {duration: 3})
    return null
  }


  return (
      <MapContainer center={location} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location}>
        </Marker>
        <FlyToNewLocation />
      </MapContainer> 
  )
};

export default MapData;