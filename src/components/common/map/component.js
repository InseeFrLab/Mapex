import React, { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import L, { bounds } from 'leaflet';
import {
	getPrivilegedPerson,
	getFavoriteNumber,
} from 'utils/survey-unit/surveyUnit';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import UE from '../ue';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [28, 40],
	iconAnchor: [17, 46],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [47.147145, 2.843729];

const MapLeaflet = ({ map, setMap, surveyUnits, Component }) => {
	const arrayPosition = [];

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
			{surveyUnits.map(({ id, address, campaign, isFavorite, persons }) => {
				const privilegPerson = getPrivilegedPerson(persons);
				const phone = getFavoriteNumber(
					privilegPerson && privilegPerson.phoneNumbers
				);
				const MyLink = (props) => (
					<Link
						to={`/${id}`}
						{...props}
						style={{ color: 'inherit', textDecoration: 'inherit' }}
					/>
				);
				const latLng = [address && address.lat, address && address.lng];
				arrayPosition.push(latLng);
				return (
					<Marker position={latLng}>
						<Popup>
						<UE
							firstName={privilegPerson && privilegPerson.firstName}
							lastName={privilegPerson && privilegPerson.lastName}
							phone={phone}
							street={address && address.l4}
							zipCity={address && address.l6}
							idCampaign={campaign}
							isFavorite={isFavorite}
							MyLink={MyLink}
						/>
						</Popup>
					</Marker>
				);
			})}
		</MapContainer>
	);
};
export default MapLeaflet;
