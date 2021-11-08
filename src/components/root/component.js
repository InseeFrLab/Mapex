import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Home from 'components/pages/home';
import Favorite from 'components/pages/favorite';
import Notifications from 'components/pages/notifications';
import Bar from './bar';
import SurveyUnit from 'components/pages/survey-unit';
import Reperage from 'components/pages/reperage';

const Root = () => (
		<Router>
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/favoris">
					<Favorite />
				</Route>
				<Route exact path="/notifications">
					<Notifications />
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
		</Router>
);

export default Root;
