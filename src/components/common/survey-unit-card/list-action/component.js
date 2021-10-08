import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Section from '../section';
import DicUnitCard from 'components/dictionary';
import { dicSurveyUnit } from 'dictionary';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const ListAction = ({ hrefSms, hrefCalendar, pathReperage }) => {
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
			<ListItem
				className={classes.ListItem}
				button
				component={Link}
				to={pathReperage}
			>
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
