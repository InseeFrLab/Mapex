import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/home';
import Favorite from 'components/favorite';
import Notifications from 'components/notifications';
import Bar from './bar';
import SurveyUnitCard from 'components/common/survey-unit-card';

const Root = () => (
	<>
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
			<Redirect to="/" />
		</Switch>
		<Bar />
	</>
);

export default Root;
