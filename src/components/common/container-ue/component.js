import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ButtonIcon from '../icon-button/component';
import CardHeader from '@material-ui/core/CardHeader';
import PersonIcon from '@material-ui/icons/Person';
import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		display: 'inline-block',
	},
	line: {
		alignItems: 'center'

	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

const ContainerUE = ({
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
		<Card className={classes.root}>
			<CardHeader
				action={
					<>
						<Typography classes={classes.title}>{idCampaign}</Typography>{' '}
						<ButtonIcon
							icon={
								isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
							}
						/>
					</>
				}
				subheader={idCampaign}
			/>
			<>
				<ButtonIcon icon={<PersonIcon />} disabled={true} />
				<Typography>{`${firstName} ${lastName}`}</Typography>
			</>
			<>
				<ButtonIcon icon={<PhoneIcon />} />
				<Typography>{phone}</Typography>
			</>
			<>
				<ButtonIcon icon={<PlaceIcon />} />
				<Typography>{street}</Typography>
				<Typography>{zipCity}</Typography>
			</>
		</Card>
	);
};

ContainerUE.propTypes = {
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

ContainerUE.defaultProps = {
	firstName: 'Camille',
	lastName: 'Backer',
	phone: '06 00 00 00 00',
	street: "1 Rue de l'église",
	zipCity: '59 000 Lille',
	idCampaign: 'log-2020-x00',
	isFavorite: false,
};
export default ContainerUE;
