import React from 'react';
import Section from './section';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const UnitCard = ({ surveyUnits }) => {
	const classes = useStyles();
	return;
};

UnitCard.propTypes = {
	/**
	 * surveyUnits is the json data
	 */
	surveyUnits: PropTypes.element,
};

UnitCard.defaultProps = {
	surveyUnits: {},
};

export default UnitCard;
