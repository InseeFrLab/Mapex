import { setDataIntoDB } from 'indexedDB/service/db-action';
import {
	getSurveyUnitsAPI,
	getUnit,
	getSurveyUnitsExtended,
	getLatLng,
} from '../call';
import D from 'dictionary/db';

export const getDataFromApiOld = ({ setError }) =>
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

export const getDataFromAPI = ({ setError }) =>
	getSurveyUnitsExtended()
		.then((surveyUnits) => {
			setDataIntoDB(D.surveyUnitDB, surveyUnits);
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});

export const getGeoloc = (unit, setError) => {
	console.log(unit);
	getLatLng(`${unit.address.l4} ${unit.address.l6}`)
		.then((response) => {
			const { lat, lng } = response.results[0].geometry.location;
			unit.address['lat'] = lat;
			unit.address['lng'] = lng;
			return unit;
		})
		.catch((e) => {
			setError(`Errror : ${e}`);
		});
};
