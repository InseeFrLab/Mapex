import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";
import 'leaflet/dist/leaflet.css';
import React from "react";
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapLeaflet = ({position,setMap,located} : {position:LatLngTuple,setMap:any,located:Boolean} ) => {
    return (
        <MapContainer  whenCreated={setMap} style={{ width: '100%', height: '100%' ,minHeight: '300px',minWidth:'300px' }} center={position} zoom={13} >
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { located && (
            <Marker position={position}>
                <Popup>Vous êtes ici</Popup>
            </Marker>)}
        </MapContainer>
    )
}

export default MapLeaflet;