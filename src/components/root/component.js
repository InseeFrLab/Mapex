import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/home';
import Favorite from 'components/favorite';
import Notifications from 'components/notifications';
import Bar from './bar';
import SurveyUnitCard from 'components/common/survey-unit-card';
import SyncDataFromAPI from 'utils/data-sync';

const Root = () => (
	<SyncDataFromAPI>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/favorite">
				<Favorite />
			</Route>
			<Route exact path="/notifications">
				<Notifications />
			</Route>
			<Route exact path="/:id">
				<SurveyUnitCard />
			</Route>
			<Redirect to="/test" />
		</Switch>
		<Bar />
	</SyncDataFromAPI>
);

export default Root;
