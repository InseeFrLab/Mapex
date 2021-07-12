import React, { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Phone from './phone';
import Place from './place';
import OtherContact from './other-contact';
import ListAction from './list-action';
import Mail from './mail';
import Note from './note';
import { useParams, useHistory } from 'react-router-dom';

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
import { getById } from 'indexedDB/service/db-action';
import D from 'dictionary/db';
import DCalendar from 'dictionary/app/calendar';

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
	const history = useHistory();
	const [surveyUnit, setSurveyUnit] = useState([]);
	const [loading, setLoading] = useState(true);
	const [privilegPerson, setPrivilegPerson] = useState({});
	const [favoritePhone, setFavoritePhone] = useState('');
	const [error, setError] = useState('');

	useEffect(() => {
		getById(D.surveyUnitDB, id).then((unit) => {
			if (unit) {
				setSurveyUnit(unit);
				setPrivilegPerson(getPrivilegedPerson(unit.persons));
				setLoading(false);
			} else {
				setError('No unit found');
			}
		});
	}, [id]);

	useEffect(() => {}, [surveyUnit]);

	useEffect(() => {
		setFavoritePhone(getFavoriteNumber(privilegPerson.phoneNumbers));
	}, [privilegPerson]);

	if (error) return <div>{error}</div>;

	const goToPreviousPath = () => {
		history.goBack();
	};

	const makeGoogleCalendarUrl = () => {
		if (!loading) {
			const baseUrl = 'http://www.google.com/calendar/event?action=TEMPLATE';

			const eventName = `${DCalendar.eventName} ${privilegPerson.firstName} ${privilegPerson.lastName}`;
			const location = `${surveyUnit.address.l4} ${surveyUnit.address.l6}`;
			const details = 'Add the link of the UE on APP';

			return `${baseUrl}&text=${eventName}&location=${location}&details=${details}`;
		}
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" color="transparent">
				<Toolbar>
					<ButtonIcon
						color="inherit"
						className={classes.buttonTopRight}
						icon={<NavigateBeforeIcon />}
						onClick={goToPreviousPath}
					/>
					<div className={classes.title}>
						<h1>{`${privilegPerson && privilegPerson.firstName} ${
							privilegPerson && privilegPerson.lastName
						}`}</h1>
					</div>
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
				<ButtonIcon
					icon={<MessageIcon />}
					href={`sms:${favoritePhone}&body=corpsMessageaajouter`}
					color="inherit"
				/>
				<ButtonIcon
					icon={<MailIcon />}
					color="inherit"
					href={`mailto:${privilegPerson.email}`}
				/>
				<ButtonIcon
					icon={<EventIcon />}
					color="inherit"
					href={makeGoogleCalendarUrl()}
				/>
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
			<ListAction
				hrefSms={`sms:${favoritePhone}&body=corpsMessageaajouter`}
				hrefCalendar={makeGoogleCalendarUrl()}
			/>
		</div>
	);
};

SurveyUnitCard.propTypes = {};

SurveyUnitCard.defaultProps = {};

export default SurveyUnitCard;
