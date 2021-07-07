import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';

import ButtonIcon from '../../icon-button';
import MailIcon from '@material-ui/icons/Mail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const Mail = ({ mail }) => {
	const classes = useStyles();
	return (
		<Section title={D.mailTitle}>
			<ListItem className={classes.ListItem}>
				<ListItemText secondary={mail} />
				<ButtonIcon icon={<MailIcon />} href={`mailto:${mail}`}/>
			</ListItem>
		</Section>
	);
};

Mail.propTypes = {
	/**
	 * Array of phone number with source
	 */
	mail: PropTypes.string,
};

Mail.defaultProps = {
	mail: 'test@test.com',
};

export default Mail;
