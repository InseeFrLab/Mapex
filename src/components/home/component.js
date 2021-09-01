import React, { useEffect, useState } from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import ListUE from 'components/common/list-ue';
import { getAll } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import MapLeaflet from 'components/common/map';
import { Link, useLocation } from 'react-router-dom';
import InstallPWA from 'components/installPwa';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		marginBottom: '56px',
	},
	fab: {
		position: 'absolute',
		bottom: theme.spacing(2),
		right: theme.spacing(2),
	},
}));
const Child = ({ displayMode, surveyUnits }) => {
	if (displayMode && displayMode === 'MAP') {
		return null;
	}
	return <ListUE contentUE={surveyUnits} />;
};
const useQuery = () => new URLSearchParams(useLocation().search);

const Home = () => {
	let query = useQuery();
	const [surveyUnits, setSurveyUnits] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [textSearch, setTextSearch] = useState('');
	const [map, setMap] = useState();
	const classes = useStyles();

	const [campaigns, setCampaigns] = useState([]);

	useEffect(() => {
		// Get Data into Local DB
		Promise.all([
			getAll(D.surveyUnitDB).then((units) => {
				setSurveyUnits(units);
			}),
			getValuesOfKey(D.surveyUnitDB, 'campaign').then((camp) => {
				setCampaigns(camp);
			}),
		]).then(() => {
			setLoading(false);
		});
	}, []);

	if (loading) return <div>{"I'm loading dude"}</div>;

	return (
		<div className={classes.root}>
			<InstallPWA />
			<SearchBar
				open={isDrawerOpen}
				setOpen={setIsDrawerOpen}
				campaigns={campaigns}
				textSearch={textSearch}
				setTextSearch={setTextSearch}
			/>
			{/* <Link to="/?display_mode=MAP">Map Link</Link>
			<Link to="/?display_mode=LIST">Liste Link</Link> */}
			<MapLeaflet
				fullscreen={query.get('display_mode') === 'MAP'}
				map={map}
				setMap={setMap}
				surveyUnits={surveyUnits}
				open={isDrawerOpen}
				setOpen={setIsDrawerOpen}
				campaigns={campaigns}
				textSearch={textSearch}
				setTextSearch={setTextSearch}
			/>
			{/* <ListUE contentUE={surveyUnits} />*/}

			<Child
				displayMode={query.get('display_mode')}
				surveyUnits={surveyUnits}
			/>
		</div>
	);
};

export default Home;
