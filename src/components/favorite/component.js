import ButtonUI from 'components/common/button';
import React, { useState } from 'react';
import API from 'api';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';
import { getLatLng } from 'utils/geocode/geocode';

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [campaign, setCampaign] = useState([]);
	const [latLng, setLatLng] = useState([]);

	const onClick = () => {
		setLoading(true);
		API.getDataFromApiOld({ setError }).then(() => {
			setLoading(false);
		});
	};

	const onClick2 = () => {
		getValuesOfKey(D.surveyUnitDB, 'campaign').then((camp) => {
			setCampaign(camp);
		});
	};

	const onClick3 = () => {
		getLatLng('1b rue de valmy 59000 Lille').then((res) => {
			const { lat, lng } = res;
			setLatLng([lat, lng]);
		});
	};

	return (
		<>
			<ButtonUI onClick={onClick} label="Fetch data" />
			<div>{error}</div>
			<div>{loading && "I'm loading dude"}</div>
			<ButtonUI onClick={onClick2} label="Get Campaign data" />
			<div>{campaign}</div>
			<ButtonUI onClick={onClick3} label="Get LatLng" />
			<div>{latLng}</div>
		</>
	);
};

export default Favorite;
