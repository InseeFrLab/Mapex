import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    map: {
        width: '300px',
        height: "300px",
    },
}));



const MapLeaflet = ({position,setMap,located}) => {
    const classes = useStyles();

    return (
        <MapContainer whenCreated={setMap} center={position} zoom={10} scrollWheelZoom={false} className={classes.map}>
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