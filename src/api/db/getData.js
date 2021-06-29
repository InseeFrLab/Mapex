import { getSurveyUnits, getUnit } from '../call';
import React, { useState } from 'react';

const getData = () => {
	const [surveyUnits, setSurveyUnits] = useState({});
	const [loadingInutile, setLoadingInutile] = useState(true); // A remplacer par une function tjs égale à true ?
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');
	const [surveyUnitsDetails, setSurveyUnitsDetails] = useState({});

	getSurveyUnits({
		setResult: setSurveyUnits,
		setLoadingInutile,
		setError,
	}).then((r) => {
		surveyUnits.map(({ id }) =>
			getUnit(id, {
				setResult: (ue) => setSurveyUnitsDetails({ ...surveyUnits, ue }),
				setLoading,
				setError,
			})
		);
	});
	return surveyUnitsDetails;
};
