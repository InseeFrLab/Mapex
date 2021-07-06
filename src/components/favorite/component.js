import ButtonUI from 'components/common/button';
import React, { useState } from 'react';
import { getDataFromAPI } from 'api';

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const onClick = () => {
		setLoading(true);
		getDataFromAPI({ setError }).then(() => {
			setLoading(false);
		});
	};

	return (
		<>
			<ButtonUI onClick={onClick} label="Save data" />
			<div>{error}</div>
			<div>{loading && "I'm loading dude"}</div>
		</>
	);
};

export default Favorite;
