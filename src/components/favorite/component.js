import ButtonUI from 'components/common/button';
import React, { useState } from 'react';
import { getDataFromAPI } from '../../api/db/getDataFromAPI';

const Favorite = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	return (
		<>
			<ButtonUI
				onClick={() => getDataFromAPI({ setLoading, setError })}
				label="Save data"
			/>
			<div>{error}</div>
			<div>{loading && "I'm loading dude"}</div>
		</>
	);
};

export default Favorite;
