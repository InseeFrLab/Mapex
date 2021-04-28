import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const MapLeaflet = ({ position, setMap, located }) => {
  const icon = L.icon({
    iconUrl: "/marker-icon.png",
    iconSize: [28, 40],
    iconAnchor: [17, 46],
  });
  return (
    <MapContainer
      whenCreated={setMap}
      center={position}
      style={{
        width: "100%",
        height: "100%",
        minHeight: "300px",
        minWidth: "300px",
      }}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {located && (
        <Marker position={position} icon={icon}>
          <Popup>Vous êtes ici</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MapLeaflet;
