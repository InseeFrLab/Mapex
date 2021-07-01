import { SURVEY_UNITS, UNITS } from "./paths";

const get = (url) =>
	fetch(url)
		.then((r) => {
			if (r.ok) return r.json();
			throw new Error('API failed');
		})
		.catch(()=> {
			throw new Error(`Fetch error for ${url}`);
		});

export const getSurveyUnits = ()=>get(SURVEY_UNITS);

export const getUnit = id => get(`${UNITS}/${id}`);