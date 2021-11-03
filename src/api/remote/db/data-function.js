import { setDataIntoDB } from 'indexedDB/service/db-action';
import { getSurveyUnitsAPI, getUnit, getSurveyUnitsExtended } from '../call';
import { dicDb } from 'dictionary';

export const getDataFromApi = ({ setError, setData = () => {}, setLoading }) =>
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
			setDataIntoDB(dicDb.surveyUnitDB, units);
			setData && setData(units);
		})
		.then(setLoading(false))
		.catch((e) => {
			setLoading(false);
			setError(`Errror : ${e}`);
		});

export const getDataFromAPIExtended = ({ setError }) =>
	getSurveyUnitsExtended()
		.then((surveyUnits) => {
			setDataIntoDB(dicDb.surveyUnitDB, surveyUnits);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});
