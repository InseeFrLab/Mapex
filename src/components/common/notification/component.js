import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ItemNotification from './item';
import { getIcon } from 'utils/notification/getIcon';
import Divider from '@material-ui/core/Divider';

// TODO get the labels of keys into db with properties

const useStyles = makeStyles((theme) => ({}));

const ListNotification = ({ dataNotifications }) => {
	const classes = useStyles();

	return (
		<List>
			{dataNotifications.map(({ labelIcon, text, date }) => (
				<>
					<ItemNotification Icon={getIcon(labelIcon)} text={text} date={date} />
					<Divider variant="middle" />
				</>
			))}
		</List>
	);
};

ListNotification.propTypes = {
	/**
	 * Icon of the notification
	 */
	dataNotifications: PropTypes.array,
};

export default ListNotification;
