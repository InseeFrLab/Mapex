import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Phone from './phone';
import Place from './place';
import OtherContact from './other-contact';
import ListAction from './list-action';
import Mail from './mail';
import Note from './note';
import { useParams } from 'react-router-dom';

import PlaceIcon from '@material-ui/icons/Place';
import PhoneIcon from '@material-ui/icons/Phone';
import MessageIcon from '@material-ui/icons/Message';
import MailIcon from '@material-ui/icons/Mail';
import EventIcon from '@material-ui/icons/Event';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ButtonIcon from '../icon-button';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { Typography } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { getById } from '../../../indexedDB/service/db-action';
import D from '../../../dictionary/db';

const useStyles = makeStyles((theme) => ({
	root: {
		marginBottom: '60px',
	},
	appBar: {},
	title: {
		flexGrow: 1,
	},
	buttonTopRight: {
		marginRight: theme.spacing(2),
	},
	icons: {
		textAlign: 'center',
		paddingTop: '0.3em',
	},
}));

const SurveyUnitCard = () => {
	const classes = useStyles();
	const isFavorite = true;
	const { id } = useParams();
	const [surveyUnit, setSurveyUnit] = useState([]);

	useEffect(() => {
		getById(D.surveyUnitDB, id).then((unit) => setSurveyUnit(unit));
	}, [id]);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<ButtonIcon
						color="inherit"
						className={classes.buttonTopRight}
						icon={<NavigateBeforeIcon />}
					/>
					<Typography className={classes.title}>Nom Prénom</Typography>
					<ButtonIcon
						color="inherit"
						icon={
							isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
						}
					/>
				</Toolbar>
			</AppBar>
			<div className={classes.icons}>
				<ButtonIcon icon={<PhoneIcon />} color="inherit" />
				<ButtonIcon icon={<MessageIcon />} color="inherit" />
				<ButtonIcon icon={<MailIcon />} color="inherit" />
				<ButtonIcon icon={<EventIcon />} color="inherit" />
				<ButtonIcon icon={<PlaceIcon />} color="inherit" />
				<Divider />
			</div>

			<Phone />
			<Place />
			<Mail />
			<Note />
			<OtherContact />
			<ListAction />
		</div>
	);
};

SurveyUnitCard.propTypes = {};

SurveyUnitCard.defaultProps = {};

export default SurveyUnitCard;
