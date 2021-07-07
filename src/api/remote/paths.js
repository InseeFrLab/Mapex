import { getEnvVar } from 'utils/env';

const BASE_URL = getEnvVar('PEARL_API_URL');

export const SURVEY_UNITS = `${BASE_URL}/api/survey-units`;
export const UNITS = `${BASE_URL}/api/survey-unit`;
