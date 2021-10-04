import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Phone from './phone';
import Place from './place';
import OtherContact from './other-contact';
import ListAction from './list-action';
import Mail from './mail';
import Note from './note';
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
import Divider from '@material-ui/core/Divider';

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

const SurveyUnitCard = ({
	privilegPerson,
	goToPreviousPath,
	surveyUnit,
	favoritePhone,
	googleCalendarUrl,
	pathReperage,
}) => {
	const isFavorite = false; // TODO Favorite stored into DB ?
	const classes = useStyles();

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
					href={`sms:${favoritePhone};?&body=Bonjour ${
						privilegPerson && privilegPerson.firstName
					}, j'arrive dans 10 minutes.`}
					color="inherit"
				/>
				<ButtonIcon
					icon={<MailIcon />}
					color="inherit"
					href={`mailto:${privilegPerson && privilegPerson.email}`}
				/>
				<ButtonIcon
					icon={<EventIcon />}
					color="inherit"
					href={googleCalendarUrl}
				/>
				<ButtonIcon
					icon={<PlaceIcon />}
					href={`https://www.google.com/maps/dir/?api=1&destination=${
						surveyUnit && surveyUnit.address.l4
					}+${surveyUnit && surveyUnit.address.l6}`}
					color="inherit"
				/>
				<Divider />
			</div>

			<Phone phoneNumbers={privilegPerson && privilegPerson.phoneNumbers} />
			<Place address={surveyUnit && surveyUnit.address} />
			<Mail mail={privilegPerson && privilegPerson.email} />
			<Note />
			<OtherContact
				otherPersons={
					surveyUnit &&
					surveyUnit.persons.filter((p) => p.id !== privilegPerson.id)
				}
			/>
			<ListAction
				hrefSms={`sms:${favoritePhone};?&body=Bonjour ${
					privilegPerson && privilegPerson.firstName
				}, j'arrive dans 10 minutes.`}
				hrefCalendar={googleCalendarUrl}
				pathReperage={pathReperage}
			/>
		</div>
	);
};

SurveyUnitCard.propTypes = {};

SurveyUnitCard.defaultProps = {};

export default SurveyUnitCard;
