import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';

import ButtonIcon from '../../icon-button';
import PlaceIcon from '@material-ui/icons/Place';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const Place = ({ address }) => {
	const classes = useStyles();
	return (
		<Section title={D.placeTitle}>
			<ListItem className={classes.ListItem}>
				<ListItemText secondary={`${address.l4} ${address.l6}`} />
				<ButtonIcon icon={<PlaceIcon />} />
			</ListItem>
		</Section>
	);
};

Place.propTypes = {
	/**
	 * Array of phone number with source
	 */
	address: PropTypes.objectOf(PropTypes.string),
};

Place.defaultProps = {
	address: {
		l1: 'Ted Farmer',
		l2: '',
		l3: '',
		l4: '1 rue de la gare',
		l5: '',
		l6: '29270 Carhaix',
		l7: 'France',
	},
};

export default Place;
