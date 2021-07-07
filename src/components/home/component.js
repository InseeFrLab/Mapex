import React, { useEffect, useState } from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import ListUE from 'components/common/list-ue';
import { getAll } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		marginBottom: '56px',
	},
}));

const Home = () => {
	const [surveyUnits, setSurveyUnits] = useState([]);
	const [loading, setLoading] = useState(true);
	// const [firstRender, setFirstRender] = useState(true);
	const classes = useStyles();

	useEffect(() => {
		getAll(D.surveyUnitDB).then((units) => {
			setSurveyUnits(units);
			setLoading(false);
		});
	}, []);

	if (loading) return <div>{"I'm loading dude"}</div>;

	return (
		<div className={classes.root}>
			<SearchBar />
			<ListUE contentUE={surveyUnits} />
		</div>
	);
};

export default Home;
