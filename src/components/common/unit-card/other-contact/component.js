import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';

import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ButtonIcon from '../../icon-button';
import Typography from '@material-ui/core/Typography';
import PlaceIcon from '@material-ui/icons/Place';
import MailIcon from '@material-ui/icons/Mail';

const OtherContact = ({ otherPersons }) => {
	return (
		<Section title={D.otherContactTitle}>
			{otherPersons.map(({ firstName, lastName, email , phoneNumbers}) => (
				<ListItem>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText>{`${firstName} ${lastName}`}</ListItemText>
					<ListItemText>{email}</ListItemText>
					<ButtonIcon icon={<MailIcon />} />
        </ListItem>
        {phoneNumbers.map(({ source, number }) => (
					<ListItem>
            <ListItemText secondary={source} />
            <>
              <Typography color="textSecondary">{number}</Typography>
              <ButtonIcon icon={<PhoneIcon />} />
            </>
						</ListItem>
        ))}
			))}
		</Section>
	);
};

OtherContact.propTypes = {
	/**
	 * Array of other contact
	 */
	otherPersons: PropTypes.array,
};

OtherContact.defaultProps = {
	otherPersons: [
		{
			id: 1,
			title: 'MISTER',
			firstName: 'Ted',
			lastName: 'Farmer',
			email: 'test@test.com',
			birthdate: 11111111,
			favoriteEmail: true,
			privileged: false,
			phoneNumbers: [
				{
					source: 'FISCAL',
					favorite: true,
					number: '+33677542802',
				},
				{
					source: 'FISCAL',
					favorite: false,
					number: '+33677542802',
				},
			],
		},
		{
			id: 5,
			title: 'MISS',
			firstName: 'Christine',
			lastName: 'Aguilar',
			email: 'test@test.com',
			birthdate: 11111111,
			favoriteEmail: true,
			privileged: false,
			phoneNumbers: [
				{
					source: 'FISCAL',
					favorite: true,
					number: '+33677542802',
				},
			],
		},
	],
};

export default OtherContact;
