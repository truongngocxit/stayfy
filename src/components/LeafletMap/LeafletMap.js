import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Popup, Marker } from "react-leaflet";
import { useState, useEffect } from "react";
import L from "leaflet";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function LeafletMap({
  style = { height: "45rem", width: "100%" },
}) {
  const [currentLocation, setCurrentLocation] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      setCurrentLocation({
        lng: longitude,
        lat: latitude,
      });
    });
  }, []);

  if (currentLocation)
    return (
      <div style={{ zIndex: "0" }}>
        <MapContainer
          zIndex={0}
          center={[currentLocation.lat, currentLocation.lng]}
          style={style}
          zoom={13}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[currentLocation.lat, currentLocation.lng]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    );
}
