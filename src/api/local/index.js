export const getDataFromAPI = ({ setError, setData = () => {}, setLoading }) =>
	Promise.resolve([setLoading(false)]);

export const postData = () => Promise.resolve(true);
