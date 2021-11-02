export const getDataFromAPI = ({ setError, setData = () => {}, setLoading }) =>
	Promise.resolve([setLoading(false)]);
