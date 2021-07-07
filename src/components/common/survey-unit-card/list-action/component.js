import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const ListAction = ({ hrefSms, hrefCalendar, actionReperage }) => {
	const classes = useStyles();
	return (
		<Section>
			<ListItem
				className={classes.ListItem}
				button
				component="a"
				target="_blank"
				href={hrefSms}
			>
				<ListItemText secondary={D.listAction.labelSms} />
			</ListItem>
			<Divider />
			<ListItem className={classes.ListItem} button>
				<ListItemText secondary={D.listAction.labelReperage} />
			</ListItem>
			<Divider />
			<ListItem
				className={classes.ListItem}
				button
				component="a"
				target="_blank"
				href={hrefCalendar}
			>
				<ListItemText secondary={D.listAction.labelCalendar} />
			</ListItem>
		</Section>
	);
};

ListAction.propTypes = {};

ListAction.defaultProps = {};

export default ListAction;
