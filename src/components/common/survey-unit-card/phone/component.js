import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

import ButtonIcon from '../../icon-button';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const Phone = ({ phoneNumbers }) => {
	const classes = useStyles();
	return (
		<Section title={D.phoneTitle}>
			{phoneNumbers.map(({ source, favorite, number }) => (
				<ListItem className={classes.ListItem}>
					<ListItemText secondary={source} />
					<>
						<Typography color="textSecondary">{number}</Typography>
						<ButtonIcon icon={<PhoneIcon />} />
						<ButtonIcon
							icon={
								favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
							}
						/>
					</>
				</ListItem>
			))}
		</Section>
	);
};

Phone.propTypes = {
	/**
	 * Array of phone number with source
	 */
	phoneNumbers: PropTypes.array,
};

Phone.defaultProps = {
	phoneNumbers: [
		{
			source: 'Source fiscale',
			favorite: true,
			number: '06 77 54 28 02',
		},
		{
			source: 'Annuaire',
			favorite: false,
			number: '06 00 00 00 00',
		},
	],
};

export default Phone;
