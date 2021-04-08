import { MapContainer, Marker, Popup, useMapEvents, TileLayer } from 'react-leaflet'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    map: {
        width: '300px',
        height: "300px",
    },

}));

function LocationMarker() {
    const [position, setPosition] = useState(null)
    
    const map = useMapEvents({
        click() {
            map.locate({setView:true});
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

function MapLeaflet(props) {
    const classes = useStyles();

    return (
        <MapContainer center={props.position} zoom={10} scrollWheelZoom={false} className={classes.map}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
    )
}

export default MapLeaflet;