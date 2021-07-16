import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';

import L, { bounds } from 'leaflet';
import { getPrivilegedPerson } from 'utils/survey-unit/surveyUnit';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [28, 40],
	iconAnchor: [17, 46],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [47.147145, 2.843729];

const MapLeaflet = ({ map, setMap, surveyUnits }) => {
	const arrayPosition = [];
	const [bounds, setBounds] = useState(L.latLngBounds(arrayPosition));

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
			zoom={5}
		>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{surveyUnits.map(({ address, persons }) => {
				const privilegPerson = getPrivilegedPerson(persons);
				const latLng = [address && address.lat, address && address.lng];
				arrayPosition.push(latLng);
				return (
					<Marker position={latLng}>
						<Popup>
							{`${privilegPerson && privilegPerson.firstName} ${
								privilegPerson && privilegPerson.lastName
							}`}{' '}
							<br />
							{`${address && address.l4} ${address && address.l6}`}
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};
export default MapLeaflet;
