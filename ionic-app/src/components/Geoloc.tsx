import { IonItem, IonButton, IonList, IonListHeader } from "@ionic/react";
import { useState, useEffect} from 'react';
import { LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';
import MapLeaflet from "./Map";


const Geoloc = () => {
    const [position, setPosition] = useState<LatLngTuple>([51.505, -0.09]);
    const [map, setMap] = useState<any>();
    const [located, setLocated] = useState<Boolean>(false);

    useEffect(() => { 
        if ( map!==undefined ){
            map.flyTo(position,16);
        }   
    },);
    
    const getLocation = () => {
        
        navigator.geolocation.getCurrentPosition(function(pos) {
            setPosition([pos.coords.latitude,pos.coords.longitude]);
        },);
        setTimeout(()=> {
            setLocated(true);
        }, 1000);

    }

    return (
        <IonList>
            <IonListHeader color="primary">
                Se géolocaliser :
            </IonListHeader>
            <IonItem>
                <MapLeaflet position={position} setMap={setMap} located={located}/>
            </IonItem>
                <IonButton onClick={getLocation}>Trouvez moi</IonButton>
        </IonList>
    )
}

export default Geoloc;
