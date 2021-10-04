import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { dataNotif } from 'data-mock';
import ListNotification from 'components/common/notification/component';
import Divider from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	title: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
	content: {
		marginTop: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
}));

const Notifications = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h4">
				Notifications
			</Typography>
			<Divider variant="middle" gutterBottom />
			<div className={classes.content}>
				<ListNotification dataNotifications={dataNotif} />
			</div>
		</div>
	);
};

export default Notifications;
