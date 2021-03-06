import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

// TODO get the labels of keys into db with properties

const useStyles = makeStyles((theme) => ({}));

const ItemNotification = ({ Icon, text, date }) => {
	const classes = useStyles();

	return (
		<ListItem className={classes.root}>
			<ListItemIcon>{Icon}</ListItemIcon>
			<ListItemText primary={text} secondary={date} />
		</ListItem>
	);
};

ItemNotification.propTypes = {
	/**
	 * Icon of the notification
	 */
	Icon: PropTypes.element,
	/**
	 * text of the notification
	 */
	text: PropTypes.string,
};

export default ItemNotification;
