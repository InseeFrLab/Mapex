import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Divider from '@material-ui/core/Divider';
import ButtonIcon from '../icon-button/component';
import CloseIcon from '@material-ui/icons/Close';
import D from 'dictionary/app/order-filter';
import Order from './order';
import Survey from './survey';
import FavoriteFilter from './favorite';

// TODO Favorite data without use mock data
// Case when there are no favorite list
// TODO get the labels of keys into db with properties

const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 10,
		backgroundColor: theme.palette.background.paper,
		padding: 0,
	},
	title: {
		color: theme.palette.text.primary,
		fontSize: 18,
	},
	list: {
		padding: 0,
	},
	top: {
		padding: 0,
		display: 'flex',
	},
	itemTitle: {
		flexBasis: 'calc(100% / 3)',
		textAlign: 'center',
		justifyContent: 'center',
	},
	buttonClose: {
		flexBasis: 'calc(100% / 3)',
		justifyContent: 'left',
		'&:hover': {
			backgroundColor: 'transparent',
		},
	},
	item: {
		justifyContent: 'center',
	},
}));

const useQuery = () => new URLSearchParams(useLocation().search);

const OrderFilter = ({ campaigns, favorites, setOpen }) => {
	const classes = useStyles();
	const history = useHistory();

	let query = useQuery();

	const buildQueryParamsFromState = (state) =>
		Object.keys(state)
			.filter((key) => state[key] === true)
			.join(',');

	const [sortCriteria, setSortCriteria] = useState(
		query.get('sort') || 'remainingDay'
	);

	useEffect(() => {
		if (sortCriteria && sortCriteria !== 'remainingDay') {
			query.set('sort', sortCriteria);
		} else {
			query.delete('sort');
		}
		history.replace({ search: query.toString() });
	}, [sortCriteria, history]);

	const buildStateFromCampaign = (campaigns) =>
		campaigns.reduce((obj, itm) => {
			obj[itm] = true;
			return obj;
		}, {});

	const buildStateFromQuery = (queryArray, array) => {
		return array.reduce((obj, itm) => {
			if (queryArray.includes(itm)) {
				obj[itm] = true;
			} else {
				obj[itm] = false;
			}
			return obj;
		}, {});
	};

	const [stateCampaign, setStateCampaign] = useState(
		query.get('campaigns')
			? buildStateFromQuery(query.get('campaigns').split(','), campaigns)
			: buildStateFromCampaign(campaigns)
	);

	useEffect(() => {
		if (stateCampaign && Object.values(stateCampaign).includes(false)) {
			query.set('campaigns', buildQueryParamsFromState(stateCampaign));
		} else {
			query.delete('campaigns');
		}
		history.replace({ search: query.toString() });
	}, [stateCampaign, history]);

	const buildArrayfromFavorites = (favorites) => {
		return favorites.map((item) => item.label);
	};

	const buildStatefromFavorites = (favorites) =>
		favorites.reduce((obj, itm) => {
			obj[itm.label] = false;
			return obj;
		}, {});

	const [stateFavorites, setStateFavorites] = useState(
		query.get('favorites')
			? buildStateFromQuery(
					query.get('favorites').split(','),
					buildArrayfromFavorites(favorites)
			  )
			: buildStatefromFavorites(favorites)
	);

	useEffect(() => {
		if (stateFavorites && Object.values(stateFavorites).includes(true)) {
			query.set('favorites', buildQueryParamsFromState(stateFavorites));
		} else {
			query.delete('favorites');
		}
		history.replace({ search: query.toString() });
	}, [stateFavorites, history]);

	return (
		<Paper className={classes.paper}>
			<List className={classes.list}>
				<ListItem className={classes.top}>
					<ButtonIcon
						className={classes.buttonClose}
						icon={<CloseIcon />}
						disableRipple={true}
						onClick={() => setOpen(false)}
					/>
					<Typography className={classes.itemTitle}>{D.title}</Typography>
				</ListItem>
				<Divider variant="fullWidth" />
				<ListItem>
					<Order value={sortCriteria} setValue={setSortCriteria} />
				</ListItem>
				<Divider variant="middle" />
				<ListItem>
					<Survey
						campaigns={campaigns}
						state={stateCampaign}
						setState={setStateCampaign}
					/>
				</ListItem>
				{/* <Divider />
				<ListItem>
					<Priority />
				</ListItem> */}
				<Divider />
				<ListItem>
					<FavoriteFilter
						favorites={favorites}
						state={stateFavorites}
						setState={setStateFavorites}
					/>
				</ListItem>
			</List>
		</Paper>
	);
};

OrderFilter.propTypes = {
	/**
	 * Content of the BottomBar
	 */
	campaigns: PropTypes.array,
};

export default OrderFilter;
