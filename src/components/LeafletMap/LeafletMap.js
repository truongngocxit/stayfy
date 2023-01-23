import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import L from "leaflet";
import customLeafletMarker from "./customLeafletMarker";
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default function LeafletMap({
  style = { height: "45rem", width: "100%" },
  coords,
}) {
  if (coords)
    return (
      <div style={{ zIndex: "0" }}>
        <MapContainer
          zIndex={0}
          center={[coords.lat, coords.lng]}
          style={style}
          zoom={12}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker
            position={[coords.lat, coords.lng]}
            icon={customLeafletMarker}
          >
            <Popup>You will stay here</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
}
