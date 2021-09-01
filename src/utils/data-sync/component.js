import { useState, useEffect } from 'react';
import API from 'api';

const SyncDataFromAPI = ({ children }) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		API.getDataFromApiOld({ setError }).then(() => {
			setLoading(false);
		});
	}, [setError, setLoading]);

	if (error) console.log({ error });

	if (loading) console.log({ loading });

	return children;
};

export default SyncDataFromAPI;
