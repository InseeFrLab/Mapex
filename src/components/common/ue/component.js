import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ButtonIcon from '../icon-button';
import PersonIcon from '@material-ui/icons/Person';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
	},
	icon: {
		minWidth: 0,
		marginRight: 3,
	},
	row: {
		justifyContent: 'space-between',
	},
	phone: {
		paddingRight: 0,
	},
	rightAlignText: {
		textAlign: 'end',
		width: 'auto',
	},
}));

const UE = ({
	firstName,
	lastName,
	phone,
	street,
	zipCity,
	idCampaign,
	isFavorite,
}) => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<ListItem>
				<ListSubheader>{idCampaign}</ListSubheader>
				<ListItemSecondaryAction>
					<ButtonIcon
						icon={
							isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
						}
					/>
				</ListItemSecondaryAction>
			</ListItem>

			<ListItem className={classes.row}>
				<ListItemIcon className={classes.icon}>
					<PersonIcon />
				</ListItemIcon>
				<ListItemText>{`${firstName} ${lastName}`}</ListItemText>
				<ListItem
					button
					href={`tel:${phone}`}
					className={`${classes.rightAlignText} ${classes.phone}`}
				>
					<ListItemIcon className={classes.icon}>
						<PhoneIcon />
					</ListItemIcon>
					<ListItemText className={classes.phone}>{phone}</ListItemText>
				</ListItem>
			</ListItem>
			<ListItem button className={classes.row}>
				<ListItemIcon className={classes.icon}>
					<PlaceIcon />
				</ListItemIcon>
				<ListItemText>{street}</ListItemText>
				<ListItemText className={classes.rightAlignText}>
					{zipCity}
				</ListItemText>
			</ListItem>
		</List>
	);
};

UE.propTypes = {
	/**
	 * firstName of the units
	 */
	firstName: PropTypes.string,
	/**
	 * lastName of the units
	 */
	lastName: PropTypes.string,
	/**
	 * The phoneNumber of the units
	 */
	phone: PropTypes.string,
	/**
	 * Street label of the units
	 */
	street: PropTypes.string,
	/**
	 * zip and city label of the units' adresse
	 */
	zipCity: PropTypes.string,
	/**
	 * idCampaign assigned to the units
	 */
	idCampaign: PropTypes.string,
	/**
	 * Booleen to indicate if units has been added to a favorite list
	 */
	isFavorite: PropTypes.bool,
};

UE.defaultProps = {
	firstName: 'Camille',
	lastName: 'Backer',
	phone: '06 00 00 00 00',
	street: "1 Rue de l'église",
	zipCity: '59 000 Lille',
	idCampaign: 'log-2020-x00',
	isFavorite: false,
};
export default UE;
