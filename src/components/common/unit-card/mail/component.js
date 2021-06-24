import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';

import ButtonIcon from '../../icon-button';
import MailIcon from '@material-ui/icons/Mail';

const Mail = ({ mail }) => {
	return (
		<Section title={D.mailTitle}>
			<ListItem>
				<ListItemText secondary={mail} />
				<ButtonIcon icon={<MailIcon />} />
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
	mail: 'test@test.com'
};

export default Mail;
