import { formatDistanceStrict } from 'date-fns';
import { getPrivilegedPerson } from './surveyUnit';

export const sortOnColumnCompareFunction = (criteria) => {
	let compareFunction;

	// eslint-disable-next-line no-unused-vars
	const noSortFunction = (a, b) => 0;

	const nameSortFunction = (a, b) =>
		getPrivilegedPerson(a.persons).lastName.localeCompare(
			getPrivilegedPerson(b.persons).lastName
		);
	const citySortFunction = (a, b) =>
		a.geographicalLocation.label.localeCompare(b.geographicalLocation.label);

	const ssechSortFunction = (a, b) =>
		a.sampleIdentifiers.ssech - b.sampleIdentifiers.ssech;
		
	const prioritySortFunction = (a, b) => b.priority - a.priority;

	const campaignSortFunction = (a, b) => a.campaign.localeCompare(b.campaign);

	const remainingDaysSortFunction = (a, b) =>
		intervalInDays(a) - intervalInDays(b);

	switch (criteria) {
		case 'sample':
			compareFunction = ssechSortFunction;
			break;

		case 'priority':
			compareFunction = prioritySortFunction;
			break;

		case 'survey':
			compareFunction = campaignSortFunction;
			break;

		case 'remainingDays':
			compareFunction = remainingDaysSortFunction;
			break;
		case 'name':
			compareFunction = nameSortFunction;
			break;
		case 'city':
			compareFunction = citySortFunction;
			break;

		default:
			compareFunction = noSortFunction;
			break;
	}
	return compareFunction;
};

const intervalInDays = (su) => {
	const { collectionEndDate } = su;
	if (new Date().getTime() > new Date(collectionEndDate).getTime()) return 0;
	const remainingDays = formatDistanceStrict(
		new Date(),
		new Date(collectionEndDate),
		{
			roundingMethod: 'ceil',
			unit: 'day',
			addSuffix: true,
		}
	);

	return remainingDays.split(' ')[0];
};
