import React from 'react';
import SearchBar from '../common/search-bar';
import { makeStyles } from '@material-ui/core/styles';
import ListUE from 'components/common/list-ue';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'relative',
		marginBottom: '56px'
	},
}));

const Home = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<SearchBar />
			<ListUE />
		</div>
	);
};

export default Home;
