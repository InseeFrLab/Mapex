import React, { useState, useEffect } from 'react';
import API from 'api';
import { firstLoadingState } from 'components/state/loading';
import { useRecoilState } from 'recoil';
import LoadingWrapper from 'components/loading-wrapper';

const Initializer = ({ children }) => {
	const [loading, setLoading] = useRecoilState(firstLoadingState);
	const [error, setError] = useState('');

	useEffect(() => {
		loading && API.getDataFromApi({ setError, setLoading });
	}, [loading,setLoading]);

	// TODO
	if (error) console.log({ error });

	return <LoadingWrapper />;
};

export default Initializer;
