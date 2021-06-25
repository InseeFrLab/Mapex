import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	paper: {
		borderRadius: 10,
		margin: '0.5em auto',
		backgroundColor: 'rgba(234, 234, 234, 0.38)',
	},
	title: {
		color: 'inherit',
		fontSize: 18,
	},
}));

const Section = ({ title, children }) => {
	const classes = useStyles();
	return (
		<Paper className={classes.paper}>
			<List
				subheader={
					title && (
						<ListSubheader className={classes.title} disableSticky={true}>
							{title}
						</ListSubheader>
					)
				}
			>
				{children}
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
	title: '',
	children: null,
	dense: false,
};

export default Section;
