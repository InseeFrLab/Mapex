import DCalendar from 'dictionary/app/calendar';

export const makeGoogleCalendarUrl = (person,surveyUnit) => {
	const eventName = `${DCalendar.eventName} ${person.firstName} ${person.lastName}`;
	const location = `${surveyUnit.address.l4} ${surveyUnit.address.l6}`;
	const details = 'Add the link of the UE on APP';

	return `${DCalendar.baseUrl}&text=${eventName}&location=${location}&details=${details}`;
};
