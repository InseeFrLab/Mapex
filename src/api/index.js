import { getEnvVar } from 'utils/env';
import * as local from './local';
import * as remote from './remote';

export const API = getEnvVar('LOCAL') ? local : remote;
