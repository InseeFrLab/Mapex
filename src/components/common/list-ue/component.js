import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import UE from '../ue';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	inline: {
		display: 'inline',
	},
}));

const ListUE = ({ contentUE }) => {
	const classes = useStyles();
	return (
		<List className={classes.root}>
			{contentUE.map(
				({
					firstName,
					lastName,
					phone,
					street,
					zipCity,
					idCampaign,
					isFavorite,
				}) => (
					<>
						<UE
							firstName={firstName}
							lastName={lastName}
							phone={phone}
							street={street}
							zipCity={zipCity}
							idCampaign={idCampaign}
							isFavorite={isFavorite}
						/>
						<Divider variant="middle" />
					</>
				)
			)}
		</List>
	);
};

ListUE.propTypes = {
	/**
	 * Content of the BottomBar
	 */
	contentUE: PropTypes.array,
};

ListUE.defaultProps = {
	contentUE: [{}, {}, {}, {}, {}],
};

export default ListUE;
