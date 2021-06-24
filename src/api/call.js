import { SURVEY_UNITS, UNITS } from "./paths";
const get = (url, { setResult, setLoading, setError }) =>
	fetch(url)
		.then((r) => {
			if (r.ok) return r.json();
			throw new Error('API failed');
		})
		.then((r) => {
			setResult(r);
			setLoading(false);
		})
		.catch((e) => {
			setError(`${e}`);
			setLoading(false);
		});

export const getSurveyUnits = (setters) => get(`${SURVEY_UNITS}`,setters);

export const getUnit = (id,setters) => get(`${UNITS}/${id}`, setters);