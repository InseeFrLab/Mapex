import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import { dicSurveyUnit } from 'dictionary';

import PersonIcon from '@material-ui/icons/Person';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ButtonIcon from '../../icon-button';
import Typography from '@material-ui/core/Typography';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const OtherContact = ({ otherPersons }) => {
	const classes = useStyles();

	if (otherPersons.length === 0) return null;
	
	return (
		<Section title={dicSurveyUnit.otherContactTitle}>
			{otherPersons.map(
				({ firstName, lastName, email, phoneNumbers }, index) => (
					<>
						{index > 0 && <Divider />}
						<ListItem className={classes.ListItem}>
							<ListItemIcon>
								<PersonIcon />
							</ListItemIcon>
							<ListItemText>{`${firstName} ${lastName}`}</ListItemText>
							<Typography>{email}</Typography>
							<ButtonIcon icon={<MailIcon />} href={`mailto:${email}`} />
						</ListItem>
						{phoneNumbers.map(({ source, number }) => (
							<ListItem className={classes.ListItem}>
								<ListItemText secondary={source} />
								<>
									<Typography color="textSecondary">{number}</Typography>
									<ButtonIcon icon={<PhoneIcon />} href={`tel:${number}`} />
								</>
							</ListItem>
						))}
					</>
				)
			)}
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
