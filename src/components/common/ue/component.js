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
	MyLink,
}) => {
	const classes = useStyles();

	return (
		<List className={classes.root} component={MyLink}>
			<ListItem>
				<ListSubheader disableSticky={true}>{idCampaign}</ListSubheader>
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
					component="a"
					target="_blank"
					onClick={(e) => {
						e.preventDefault();
						window.open(`tel:${phone}`);
					}}
					className={`${classes.rightAlignText} ${classes.phone}`}
				>
					<ListItemIcon className={classes.icon}>
						<PhoneIcon />
					</ListItemIcon>
					<ListItemText className={classes.phone}>{phone}</ListItemText>
				</ListItem>
			</ListItem>
			<ListItem
				button
				component="a"
				target="_blank"
				onClick={(e) => {
					e.preventDefault();
					window.open(
						`https://www.google.com/maps/dir/?api=1&destination=${street}+${zipCity}`
					);
				}}
				className={classes.row}
			>
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
	/**
	 * Link to the unit-cart
	 */
	MyLink: PropTypes.func,
};

UE.defaultProps = {
	firstName: '',
	lastName: '',
	phone: '',
	street: '',
	zipCity: '',
	idCampaign: '',
	isFavorite: false,
};
export default UE;
