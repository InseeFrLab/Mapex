import { getEnvVar } from 'utils/env';

const BASE_URL = getEnvVar('PEARL_API_URL');
const STROMAE_URL = getEnvVar('STROMAE_API_URL')
export const SURVEY_UNITS = `${BASE_URL}/api/survey-units`;
export const UNITS = `${BASE_URL}/api/survey-unit`;
 
export const PARADATA = `${STROMAE_URL}/api/paradata`;