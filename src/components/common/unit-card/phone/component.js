import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import { makeStyles } from '@material-ui/core/styles';
import D from '../../../../dictionary/app/unit-card';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ButtonIcon from '../../icon-button';
import Typography from '@material-ui/core/Typography';

const Phone = ({ phoneNumbers }) => {
	return (
		<Section title={D.phoneLabel}>
			{phoneNumbers.map(({ source, favorite, number }) => (
				<ListItem button>
					<ListItemText><Typography>{source}</Typography></ListItemText>
					<ListItemText><Typography>{number}</Typography></ListItemText>
					<ListItemSecondaryAction>
						<ButtonIcon
							icon={
								favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
							}
						/>
					</ListItemSecondaryAction>
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
	],
};

export default Phone;
