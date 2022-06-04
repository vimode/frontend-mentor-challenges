import { MapContainer, TileLayer, useMap, Marker } from 'react-leaflet';
import { Icon } from "leaflet";

function MapData ({IPinfo}) {

// default location
  const location = [51.505, -0.09]
  const zoomLevel = 13;

  let mapCenter = location

  if (IPinfo) {
    location[0] = IPinfo.lat;
    location[1] = IPinfo.long
    mapCenter = [location[0], location[1] + 100]
  } 

 //flyTo Map method to update the map view when co-ordinates change, this hook returns component
 //https://leafletjs.com/reference.html#map-flyto
  function FlyToNewLocation() {
    const map = useMap()
    map.flyTo(location, zoomLevel, {duration: 3})
    return null
  }

  // custom marker icon
  const blackMarker = new Icon({
    iconUrl : "./images/icon-location.svg",
    iconSize :  [30,38]
  });



  return (
      <MapContainer center={mapCenter} zoom={zoomLevel} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={location} icon ={blackMarker}>
        </Marker>
        <FlyToNewLocation />
      </MapContainer> 
  )
};

export default MapData;