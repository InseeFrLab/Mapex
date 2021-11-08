import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { Link } from 'react-router-dom';

import L from 'leaflet';
import { getPrivilegedPerson, getFavoriteNumber } from 'utils/survey-unit';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import UE from '../ue';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Fab from '@material-ui/core/Fab';
import CustomControl from './custom-control';

let DefaultIcon = L.icon({
	iconUrl: icon,
	shadowUrl: iconShadow,
	iconSize: [28, 40],
	iconAnchor: [17, 46],
});

L.Marker.prototype.options.icon = DefaultIcon;

const position = [50.63276576246312, 3.0779911675174123];

const FabButton = () => (
	<Fab onClick={() => console.log('click fab')}>
		<FullscreenIcon />
	</Fab>
);

const MapLeaflet = ({ setMap, surveyUnits, fullscreen }) => {
	const arrayPosition = [];
	const [height, setHeight] = useState('300px');
	useEffect(() => {
		fullscreen === 'MAP' && setHeight('500px');
	}, [fullscreen]);
	return (
		<MapContainer
			whenCreated={setMap}
			center={position}
			style={{
				width: '100%',
				height: height,
				minHeight: height,
				minWidth: '300px',
			}}
			zoom={13}
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
			<CustomControl Component={<FabButton />} position="bottomright" />
		</MapContainer>
	);
};
export default MapLeaflet;
