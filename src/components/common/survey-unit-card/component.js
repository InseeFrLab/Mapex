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
import {
	getPrivilegedPerson,
	getFavoriteNumber,
} from 'utils/survey-unit/surveyUnit';

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
	const isFavorite = false; // TODO Favorite stored into DB ? 
	const { id } = useParams();
	const [surveyUnit, setSurveyUnit] = useState([]);
	const [loading, setLoading] = useState(true);
	const [privilegPerson, setPrivilegPerson] = useState({});
	const [favoritePhone, setFavoritePhone] = useState('');

	useEffect(() => {
		getById(D.surveyUnitDB, id).then((unit) => {
			setSurveyUnit(unit);
			setPrivilegPerson(getPrivilegedPerson(unit.persons));
			setLoading(false);
		});
	}, [id]);

	useEffect(() => {
		setFavoritePhone(getFavoriteNumber(privilegPerson.phoneNumbers));
	}, [privilegPerson]);

	return (
		<div className={classes.root}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<ButtonIcon
						color="inherit"
						className={classes.buttonTopRight}
						icon={<NavigateBeforeIcon />}
					/>
					<Typography className={classes.title}>{`${
						privilegPerson && privilegPerson.firstName
					} ${privilegPerson && privilegPerson.lastName}`}</Typography>
					<ButtonIcon
						color="inherit"
						icon={
							isFavorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />
						}
					/>
				</Toolbar>
			</AppBar>
			<div className={classes.icons}>
				<ButtonIcon
					icon={<PhoneIcon />}
					href={`tel:${favoritePhone}`}
					color="inherit"
				/>
				<ButtonIcon icon={<MessageIcon />} color="inherit" />
				<ButtonIcon icon={<MailIcon />} color="inherit" href={`mailto:${privilegPerson.email}`}/>
				<ButtonIcon icon={<EventIcon />} color="inherit" />
				<ButtonIcon
					icon={<PlaceIcon />}
					href={`https://www.google.com/maps/dir/?api=1&destination=${
						!loading && surveyUnit.address.l4
					}+${!loading && surveyUnit.address.l6}`}
					color="inherit"
				/>
				<Divider />
			</div>

			<Phone phoneNumbers={!loading ? privilegPerson.phoneNumbers : []} />
			<Place address={!loading && surveyUnit.address} />
			<Mail mail={!loading && privilegPerson.email} />
			<Note />
			<OtherContact
				otherPersons={
					!loading
						? surveyUnit.persons.filter((p) => p.id !== privilegPerson.id)
						: []
				}
			/>
			<ListAction />
		</div>
	);
};

SurveyUnitCard.propTypes = {};

SurveyUnitCard.defaultProps = {};

export default SurveyUnitCard;
