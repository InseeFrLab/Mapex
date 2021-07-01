import { setDataIntoDB } from 'indexedDB/service/db-action';
import { getSurveyUnits, getUnit } from '../call';

export const getData = ({ setData, setLoading, setError }) => {
	setLoading(true);
	getSurveyUnits()
		.then(async (surveyUnits) => {
			const result = await Promise.all(
				surveyUnits.map((basicUnit) =>
					getUnit(basicUnit.id).then((r) => ({ ...r, ...basicUnit }))
				)
			);
			return result;
		})
		.then((units) => {
			setDataIntoDB("surveyUnit",units)
			setLoading(false);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
			setLoading(false);
		});
};
