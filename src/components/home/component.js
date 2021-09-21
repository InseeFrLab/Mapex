import React, { useEffect, useState } from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import WrapperListUE from 'components/common/list-ue';
import { getAll } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import MapLeaflet from 'components/common/map';
import { useLocation } from 'react-router-dom';
import { dataFavorite } from 'data-mock/favorite';
import { sortOnColumnCompareFunction } from 'utils/survey-unit/order';
import { applyFilters } from 'utils/survey-unit';

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
	return <WrapperListUE contentUE={surveyUnits} />;
};

const useQuery = () => new URLSearchParams(useLocation().search);

const Home = () => {
	let query = useQuery();
	const [surveyUnits, setSurveyUnits] = useState([]);
	const [campaigns, setCampaigns] = useState([]);
	const [filteredSurveyUnits, setFilteredSurveyUnits] = useState([]);
	const [favorites, setFavorites] = useState(dataFavorite); //TODO Data into indexedDB
	const [loading, setLoading] = useState(true);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [map, setMap] = useState();
	const classes = useStyles();
	const [saveQuery, setSaveQuery] = useState(query.toString());

	const refreshSortCriteria = () => query.get('sort') || 'remainingDay';

	// Loading Data From IndexedDB
	useEffect(() => {
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

	const [sortCriteria, setSortCriteria] = useState(refreshSortCriteria());

	const buildArrayFromQueryParams = (t) => {
		if (t) return t.split(',');
		return null;
	};

	const getUEFromFavoriteLabels = (favorites, arrayLabels) => {
		if (arrayLabels)
			return favorites
				.filter((obj) => arrayLabels.includes(obj.label))
				.map((obj) => obj.UE)
				.reduce((a, b) => a.concat(b), []);
		return [];
	};

	const refreshFilters = () => ({
		textSearch: query.get('textSearch') || '',
		campaigns: buildArrayFromQueryParams(query.get('campaigns')) || [],
		priority: query.get('priority') || false,
		favorites: getUEFromFavoriteLabels(
			favorites,
			buildArrayFromQueryParams(query.get('favorites'))
		),
	});

	const [filters, setFilters] = useState(refreshFilters());

	useEffect(() => {
		//If query params change we refresh filters et sort param
		setFilters(refreshFilters());
		setSortCriteria(refreshSortCriteria());
	}, [query.toString()]);

	useEffect(() => {
		const sortSU = (su) => su.sort(sortOnColumnCompareFunction(sortCriteria));
		const filteredSU = applyFilters(surveyUnits, filters);
		setFilteredSurveyUnits(sortSU(filteredSU));
	}, [filters, sortCriteria, surveyUnits]);

	// To Do Loading page
	if (loading) return <div>{"I'm loading dude"}</div>;

	return (
		<>
			<div className={classes.root}>
				<SearchBar
					open={isDrawerOpen}
					setOpen={setIsDrawerOpen}
					campaigns={campaigns}
					favorites={favorites}
				/>
				{/* <Link to="/?display_mode=MAP">Map Link</Link>
			<Link to="/?display_mode=LIST">Liste Link</Link> */}

				<MapLeaflet
					fullscreen={query.get('display_mode') === 'MAP'}
					map={map}
					setMap={setMap}
					surveyUnits={filteredSurveyUnits}
				/>
				{/* <WrapperListUE contentUE={surveyUnits} />*/}

				<Child
					displayMode={query.get('display_mode')}
					surveyUnits={filteredSurveyUnits}
				/>
			</div>
		</>
	);
};

export default Home;
