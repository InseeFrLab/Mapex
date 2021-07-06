import { setDataIntoDB } from 'indexedDB/service/db-action';
import { getSurveyUnitsAPI, getUnit } from '../call';
import D from 'dictionary/db';

export const getDataFromAPI = ({ setError }) =>
	getSurveyUnitsAPI()
		.then(async (surveyUnits) => {
			const result = await Promise.all(
				surveyUnits.map((basicUnit) =>
					getUnit(basicUnit.id).then((r) => ({ ...r, ...basicUnit }))
				)
			);
			return result;
		})
		.then((units) => {
			setDataIntoDB(D.surveyUnitDB, units);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});
