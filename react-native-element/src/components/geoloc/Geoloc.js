import { Card, Button } from "react-native-elements";
import MapLeaflet from "./Map";
import { useState, useEffect, useRef } from "react";

const Geoloc = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [map, setMap] = useState();
  const [located, setLocated] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (map !== undefined && located) {
      map.flyTo(position, 16);
    }
  }, [position, map, located]);

  useEffect(() => {
    if (!isFirstRender.current) {
      setLocated(true); // do something after state has updated
    }
  }, [position]);

  useEffect(() => {
    isFirstRender.current = false; // toggle flag after first render/mounting
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setPosition([pos.coords.latitude, pos.coords.longitude]);
      console.log(pos.coords.latitude, pos.coords.longitude);
    });
  };
  return (
    <Card>
      <Card.Title>Se géolocaliser</Card.Title>
      <Card.Divider />
        <MapLeaflet position={position} setMap={setMap} located={located} />
      <Button title="Trouvez moi" onPress={() => getLocation()}/>
    </Card>
  );
};
export default Geoloc;
