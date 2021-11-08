import { SURVEY_UNITS, UNITS, PARADATA } from './paths';

const fetcher = (url, method, body) => {
	const headers = {
		Accept: 'application/json, text/plain, */*',
		'Content-Type': 'application/json',
	};
	return fetch(url, {
		headers: headers,
		method,
		body: body ? JSON.stringify(body) : null,
	})
		.then((r) => {
			console.log(r);
			if (r.ok) return r.json();
			throw new Error('API failed');
		})
		.catch((e) => {
			console.log(e);
			throw new Error(`Fetch error for ${url}`);
		});
};

const postRequest = (url) => (body) => fetcher(url, 'POST', body);
const getRequest = (url) => fetcher(url, 'GET', null);

export const getSurveyUnitsAPI = () => getRequest(SURVEY_UNITS);

export const getSurveyUnitsExtended = () =>
	getRequest(`${SURVEY_UNITS}?extended=true`);

export const getUnit = (id) => getRequest(`${UNITS}/${id}`);

export const postParadata = (body) => postRequest(PARADATA)(body);
