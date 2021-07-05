import { setDataIntoDB } from 'indexedDB/service/db-action';
import { getSurveyUnitsAPI, getUnit } from '../call';
import D from '../../dictionary/db';

export const getDataFromAPI = ({ setLoading, setError }) => {
	setLoading(true);
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
			setLoading(false);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
			setLoading(false);
		});
};
