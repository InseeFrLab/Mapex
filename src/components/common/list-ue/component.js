import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import UE from '../ue';
import Divider from '@material-ui/core/Divider';
import {
	getFavoriteNumber,
	getPrivilegedPerson,
} from '../../../utils/survey-unit/surveyUnit';

// https://codesandbox.io/s/5wqo7z2np4 for loading data
// TODO :
// Include control about data. Don't show default value exept in storybook

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		maxHeight: '100%',
		overflow: 'auto',
	},
	inline: {
		display: 'inline',
	},
}));

const ListUE = ({ contentUE }) => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			{contentUE.map(({ address, campaign, isFavorite, href, persons }) => {
				const privilegPerson = getPrivilegedPerson(persons);
				const phone = getFavoriteNumber(
					privilegPerson && privilegPerson.phoneNumbers
				);
				return (
					<>
						<UE
							firstName={privilegPerson && privilegPerson.firstName}
							lastName={privilegPerson && privilegPerson.lastName}
							phone={phone}
							street={address && address.l4}
							zipCity={address && address.l6}
							idCampaign={campaign}
							isFavorite={isFavorite}
							href={href}
						/>
						<Divider variant="middle" />
					</>
				);
			})}
		</List>
	);
};

ListUE.propTypes = {
	/**
	 * Content of the BottomBar
	 */
	contentUE: PropTypes.array,
};

ListUE.defaultProps = {
	contentUE: [],
};

export default ListUE;
