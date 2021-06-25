import React from 'react';
import PropTypes from 'prop-types';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Section from '../section';
import D from '../../../../dictionary/app/unit-card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	ListItem: {
		paddingTop: 0,
		paddingBottom: 0,
	},
}));

const Note = ({ note }) => {
	const classes = useStyles();
	return (
		<Section title={D.noteTitle}>
			<ListItem className={classes.ListItem}>
				<ListItemText secondary={note} />
			</ListItem>
		</Section>
	);
};

Note.propTypes = {
	/**
	 * Array of phone number with source
	 */
	note: PropTypes.string,
};

Note.defaultProps = {
	note: 'Ajouter une note',
};

export default Note;
