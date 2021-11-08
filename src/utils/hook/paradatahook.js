import { useState, useEffect } from 'react';
import API from "api"
export const usePostData = (data) => {
  const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

  useEffect(() => {
		API.postData(data)
			.then(() => {
				setLoading(false);
			})
			.catch((err) => {
				setError(err);
			});
	}, [data]);

	return { loading, error };

}