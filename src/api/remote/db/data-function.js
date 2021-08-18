import { setDataIntoDB } from 'indexedDB/service/db-action';
import { getSurveyUnitsAPI, getUnit, getSurveyUnitsExtended } from '../call';
import D from 'dictionary/db';

export const getDataFromApiOld = ({ setError, setData = () => {} }) =>
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
			setData && setData(units);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});

export const getDataFromAPI = ({ setError }) =>
	getSurveyUnitsExtended()
		.then((surveyUnits) => {
			setDataIntoDB(D.surveyUnitDB, surveyUnits);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});
