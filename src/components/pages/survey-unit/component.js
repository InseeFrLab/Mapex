import React, { useEffect, useState } from 'react';

import { useParams, useHistory, useRouteMatch } from 'react-router-dom';
import SurveyUnitCard from 'components/common/survey-unit-card';
import { getById } from 'indexedDB/service/db-action';
import {
	getPrivilegedPerson,
	getFavoriteNumber,
	makeGoogleCalendarUrl,
} from 'utils/survey-unit';
import { dicDb } from 'dictionary';

const SurveyUnit = () => {
	let { path, url } = useRouteMatch();
	const { id } = useParams();
	const history = useHistory();
	const [surveyUnit, setSurveyUnit] = useState([]);
	const [loading, setLoading] = useState(true);
	const [privilegPerson, setPrivilegPerson] = useState({});
	const [favoritePhone, setFavoritePhone] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getById(dicDb.surveyUnitDB, id).then((unit) => {
			if (unit) {
				setSurveyUnit(unit);
				setPrivilegPerson(getPrivilegedPerson(unit.persons));
				setLoading(false);
			} else {
				setError('No unit found');
			}
		});
	}, [id]);

	useEffect(() => {
		setFavoritePhone(getFavoriteNumber(privilegPerson.phoneNumbers));
		console.log(privilegPerson);
	}, [privilegPerson]);

	if (error) return <div>{error}</div>; // Add button to go back.

	if (loading) return <div>I'm Loading</div>;

	const goToPreviousPath = () => {
		history.goBack();
	};
	console.log(path);

	return (
		<SurveyUnitCard
			goToPreviousPath={goToPreviousPath}
			privilegPerson={privilegPerson}
			surveyUnit={surveyUnit}
			favoritePhone={favoritePhone}
			googleCalendarUrl={makeGoogleCalendarUrl(privilegPerson, surveyUnit)}
			pathReperage={`reperage/${id}`}
		/>
	);
};

export default SurveyUnit;
