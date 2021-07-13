import ButtonUI from 'components/common/button';
import React, { useState } from 'react';
import API from 'api';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');
	const [campaign, setCampaign] = useState([]);

	const onClick = () => {
		setLoading(true);
		API.getDataFromAPI({ setError }).then(() => {
			setLoading(false);
		});
	};

	const onClick2 = () => {
		getValuesOfKey(D.surveyUnitDB, 'campaign').then((camp) => {
			setCampaign(camp);
		});
	};

	return (
		<>
			<ButtonUI onClick={onClick} label="Fetch data" />
			<div>{error}</div>
			<div>{loading && "I'm loading dude"}</div>
			<ButtonUI onClick={onClick2} label="Get Campaign data" />
			<div>{campaign}</div>
		</>
	);
};

export default Favorite;
