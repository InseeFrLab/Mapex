import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ItemFavorite from './item/component';

const useStyles = makeStyles((theme) => ({
	item: {
		marginBottom: theme.spacing(2),
	},
}));

const ListeFavorite = ({ dataFavorite }) => {
	const classes = useStyles();
	return (
		<>
			{dataFavorite.map(({ label, UE }) => (
				<div className={classes.item}>
					<ItemFavorite title={label} UE={UE} />
				</div>
			))}
		</>
	);
};

ListeFavorite.propTypes = {
	/**
	 * Icon of the notification
	 */
	dataFavorite: PropTypes.array,
};

export default ListeFavorite;
