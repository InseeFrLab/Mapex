import React, { useEffect, useState } from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import ListUE from 'components/common/list-ue';
import { getAll } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import MapLeaflet from 'components/common/map';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		marginBottom: '56px',
	},
}));

const Home = () => {
	const [surveyUnits, setSurveyUnits] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	// const [firstRender, setFirstRender] = useState(true);
	const [map, setMap] = useState();
	const classes = useStyles();

	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		Promise.all([
			getAll(D.surveyUnitDB).then((units) => {
				setSurveyUnits(units);
			}),
			getValuesOfKey(D.surveyUnitDB, 'campaign').then((camp) => {
				setCampaigns(camp);
			}),
		]).then(setLoading(false));
	}, []);

	if (loading) return <div>{"I'm loading dude"}</div>;

	return (
		<div className={classes.root}>
			<SearchBar
				open={isDrawerOpen}
				setOpen={setIsDrawerOpen}
				campaigns={campaigns}
				textSearch={textSearch}
				setTextSearch={setTextSearch}
			/>
			<MapLeaflet setMap={setMap} />
			<ListUE contentUE={surveyUnits} />
		</div>
	);
};

export default Home;
