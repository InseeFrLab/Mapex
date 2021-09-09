import React, { useEffect, useState } from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import WrapperListUE from 'components/common/list-ue';
import { getAll } from 'indexedDB/service/db-action';
import D from '../../dictionary/db';
import { getValuesOfKey } from 'indexedDB/service/db-action';
import MapLeaflet from 'components/common/map';
import { useLocation, Link } from 'react-router-dom';
import InstallPWA from 'components/installPwa';
import { dataFavorite } from 'data-mock/favorite';

// import {sortOnColumnCompareFunction} from 'utils/data-filter-order/order'

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
	const [init, setInit] = useState(true);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	// const [textSearch, setTextSearch] = useState('');
	const [map, setMap] = useState();
	const classes = useStyles();

	const [sortCriteria, setSortCriteria] = useState(
		query.get('sort') || 'remainingDay'
	);

	const buildArrayFromQueryParams = (t) => {
		if (t) return t.split(',');
		return null;
	};

	const getUEFromFavoriteLabels = (arrayLabels) => {
		favorites
			.filter((obj) => arrayLabels.includes(obj.label))
			.map((obj) => obj.UE)
			.reduce((a, b) => a.concat(b), []);
	};

	const filters = {
		textSearch: query.get('textSearch') || '',
		campaigns: buildArrayFromQueryParams(query.get('campaigns')) || [],
		priority: query.get('priority') || true,
		favorites: query.get('favorites')
			? getUEFromFavoriteLabels(
					buildArrayFromQueryParams(query.get('favorites'))
			  )
			: [],
	};
	// Loading Data From IndexedDB
	useEffect(() => {
		if (init) {
			setInit(false);
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
		}
	}, [init]);

	// To Do Loading page
	if (loading) return <div>{"I'm loading dude"}</div>;

	// useEffect(() => {
	//   const sortSU = su => su.sort(sortOnColumnCompareFunction(sortCriteria));
	//   const filteredSU = applyFilters(surveyUnits, filters);

	//   const { searchFilteredSU, totalEchoes, matchingEchoes } = filteredSU;
	//   setFilteredSurveyUnits(sortSU(searchFilteredSU));

	// }, [filters, sortCriteria, surveyUnits]);

	return (
		<div className={classes.root}>
			<InstallPWA />
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
				surveyUnits={surveyUnits}
			/>
			{/* <WrapperListUE contentUE={surveyUnits} />*/}

			<Child
				displayMode={query.get('display_mode')}
				surveyUnits={surveyUnits}
			/>
		</div>
	);
};

export default Home;
