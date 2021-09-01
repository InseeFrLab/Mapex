import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import ListeFavorite from 'components/common/liste-fav/component';
import { dataFavorite } from 'data-mock/favorite';

const useStyles = makeStyles((theme) => ({
	title: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
	content: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
}));

const Favorite = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h4">
				Favoris
			</Typography>
			<Divider variant="middle" gutterBottom />
			<div className={classes.content}>
				<ListeFavorite dataFavorite={dataFavorite} />
			</div>
		</div>
	);
};

export default Favorite;
