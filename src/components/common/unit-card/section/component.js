import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 10,
		margin: '0.5em auto',
		backgroundColor: '#EAEAEA',
	},
	title: {
		color: 'inherit',
		fontSize: 18,
	},
}));

const Section = ({ title, children, ...props }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<List
				subheader={
					<ListSubheader className={classes.title} >
						{title}
					</ListSubheader>
				}
			>
				<ListItem>{children}</ListItem>
			</List>
		</Paper>
	);
};

Section.propTypes = {
	/**
	 * title of the section
	 */
	title: PropTypes.string,
	/**
	 * Children of the section
	 */
	children: PropTypes.element,
};

Section.defaultProps = {
	title: 'Titre',
	children: null,
};

export default Section;
