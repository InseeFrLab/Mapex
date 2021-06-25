import React from 'react';
import Section from './section';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Phone from './phone';
import Place from './place';
import OtherContact from './other-contact';
import ListAction from './list-action';
import Mail from './mail';
import Note from './note';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonIcon from '../icon-button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {},
	appBar: {

	},
	title: {
    flexGrow: 1,
  },
	buttonTopRight:{
		marginRight: theme.spacing(2),
	}
}));

const SurveyUnitCard = ({ surveyUnits }) => {
	const classes = useStyles();
	const isFavorite = true;

	return (
		<div className={classes.root}>
			<AppBar position="static" color="default">
				<Toolbar>
					<ButtonIcon color='inherit' className={classes.buttonTopRight} icon={<NavigateBeforeIcon />} />
					<Typography className={classes.title}>Nom Prénom</Typography>
					<ButtonIcon color='inherit' icon={isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />} />
				</Toolbar>
			</AppBar>

			<Phone />
			<Place />
			<Mail />
			<Note />
			<OtherContact />
			<ListAction />
		</div>
	);
};

SurveyUnitCard.propTypes = {
	/**
	 * surveyUnits is the json data
	 */
	surveyUnits: PropTypes.element,
};

SurveyUnitCard.defaultProps = {
	surveyUnits: {},
};

export default SurveyUnitCard;
