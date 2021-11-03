import { useState, useEffect } from 'react';

export const useFetch = (getter, params) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	useEffect(() => {
		getter(params)
			.then((c) => {
				setData(c);
			})
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
			});
	}, [getter, params]);

	return { data, loading, error };
};
