import { formatDistanceStrict } from 'date-fns';

export const sortOnColumnCompareFunction = (criteria) => {
	let compareFunction;

	// eslint-disable-next-line no-unused-vars
	const noSortFunction = (a, b) => 0;

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
