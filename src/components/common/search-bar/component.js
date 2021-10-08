import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import ButtonIcon from '../icon-button';
import D from '../../../dictionary/components/pages/home/home';
import DrawerOrderFilter from '../drawer-order-filter';
import { useLocation, useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	paper: {
		display: 'flex',
		alignItems: 'center',
		width: 300,
		borderRadius: 25,
		margin: '0.5em auto',
	},
	input: {
		marginLeft: theme.spacing(1),
		flex: 1,
	},
	iconButton: {
		padding: 10,
	},
}));

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchBar = ({ campaigns, open, setOpen, favorites }) => {
	const history = useHistory();
	let query = useQuery();

	const [textSearch, setTextSearch] = useState(query.get('textSearch') || '');

	useEffect(() => {
		if (textSearch && textSearch !== '') {
			query.set('textSearch', textSearch);
		} else {
			query.delete('textSearch');
		}
		history.replace({search: query.toString() });
	}, [textSearch, history]);

	const handleChange = (e) => {
		setTextSearch(e.target.value);
	};

	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<ButtonIcon
				className={classes.iconButton}
				disabled={true}
				icon={<SearchIcon />}
			/>
			<InputBase
				className={classes.input}
				placeholder={D.searchBar}
				onChange={handleChange}
				inputProps={{ 'aria-label': D.searchBarAreaLabel }}
				value={textSearch}
			/>
			<ButtonIcon
				className={classes.iconButton}
				icon={<TuneIcon />}
				onClick={() => setOpen(true)}
			/>
			<DrawerOrderFilter open={open} setOpen={setOpen} campaigns={campaigns} favorites={favorites}/>
		</Paper>
	);
};

export default SearchBar;
