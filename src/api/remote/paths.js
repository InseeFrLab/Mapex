import { getEnvVar } from 'utils/env';

const BASE_URL = getEnvVar('PEARL_API_URL');

const keyGoogle = getEnvVar('GOOGLE_API_KEY');

export const SURVEY_UNITS = `${BASE_URL}/api/survey-units`;
export const UNITS = `${BASE_URL}/api/survey-unit`;

export const GOOGLE_BASE_URL = `https://maps.googleapis.com/maps/api/geocode/json?&key=${keyGoogle}&language=fr&region=fr&`;
