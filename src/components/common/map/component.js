import React from 'react';
import 'leaflet/dist/leaflet.css';

import {
	MapContainer,
	Marker,
	Tooltip,
	Pane,
	TileLayer,
	LayerContainer,
	LayersControl,
} from 'react-leaflet';
import SearchBar from '../search-bar';

const position = [51.505, -0.09];

const makeMarkerPopup = (unit) => {
	
}

const MapLeaflet = ({ setMap }) => {
	return (
		<MapContainer
			whenCreated={setMap}
			center={position}
			style={{
				width: '100%',
				height: '100%',
				minHeight: '300px',
				minWidth: '300px',
			}}
			zoom={10}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
		</MapContainer>
	);
};
export default MapLeaflet;
