import { useState } from 'react';
import API from 'api';

const SyncDataFromAPI = () => {
	const [error, setError] = useState('');
	API.getDataFromApiOld({ setError }).then(console.log(error));
	return null;
};

export default SyncDataFromAPI;
