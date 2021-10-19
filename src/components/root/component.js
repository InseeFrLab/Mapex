import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from 'components/pages/home';
import Favorite from 'components/pages/favorite';
import Notifications from 'components/pages/notifications';
import Bar from './bar';
import SurveyUnit from 'components/pages/survey-unit';
import SyncDataFromAPI from 'utils/data-sync';
import Reperage from 'components/pages/reperage';
import Loading from 'components/common/loading';

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
			<Route exact path="/loading">
				<Loading />
			</Route>
			<Route exact path="/reperage/:id">
				<Reperage />
			</Route>
			<Route exact path="/:id">
				<SurveyUnit />
			</Route>
			<Redirect to="/" />
		</Switch>
		<Bar />
	</SyncDataFromAPI>
);

export default Root;
