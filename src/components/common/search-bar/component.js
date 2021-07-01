import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import TuneIcon from '@material-ui/icons/Tune';
import SearchIcon from '@material-ui/icons/Search';
import ButtonIcon from '../icon-button';
import D from '../../../dictionary/app/home';

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

const SearchBar = () => {
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
				inputProps={{ 'aria-label': D.searchBarAreaLabel }}
			/>
			<ButtonIcon className={classes.iconButton} icon={<TuneIcon />} />
		</Paper>
	);
};

export default SearchBar;
