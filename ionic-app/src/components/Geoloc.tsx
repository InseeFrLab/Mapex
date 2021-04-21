import { IonItem, IonButton, IonList, IonListHeader } from "@ionic/react";
import { useState, useEffect, useRef } from 'react';
import { LatLng, LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';
import MapLeaflet from "./Map";


const Geoloc = () => {
    const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]);
    const [map, setMap] = useState<any>();
    const [located, setLocated] = useState<Boolean>(false);
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (map !== undefined && located) {
            map.flyTo(position, 16);
        }
    }, [position, map,located]);

    useEffect(() => {
        if (!isFirstRender.current) {
            setLocated(true) // do something after state has updated
        }
    }, [position])

    useEffect(() => {
        isFirstRender.current = false // toggle flag after first render/mounting
    }, [])




    const getLocation = () => {

        navigator.geolocation.getCurrentPosition(function (pos) {
            setPosition([pos.coords.latitude, pos.coords.longitude]);
        });
        // setTimeout(()=> {
        //     setLocated(true);
        // }, 1000);

    }

    return (
        <IonList>
            <IonListHeader color="primary">
                Se géolocaliser :
            </IonListHeader>
            <IonItem>
                <MapLeaflet position={position} setMap={setMap} located={located} />
            </IonItem>
            <IonButton onClick={getLocation}>Trouvez moi</IonButton>
        </IonList>
    )
}

export default Geoloc;
