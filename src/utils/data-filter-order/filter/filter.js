import { getPrivilegedPerson } from 'utils/survey-unit';

export const applyFilters = (surveyUnits, filters) => {
	const {
		textSearch: searchFilter,
		campaigns: campaignFilter,
		toDos: toDoFilter,
		priority: priorityFilter,
	} = filters;

	const normalize = (string) =>
		string
			.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.toLowerCase();

	const filterBySearch = (su) => {
		const { firstName, lastName } = getPrivilegedPerson(su);
		if (searchFilter !== '') {
			const normalizedSearchFilter = normalize(searchFilter);
			return (
				normalize(firstName).includes(normalizedSearchFilter) ||
				normalize(lastName).includes(normalizedSearchFilter) ||
				su.id.toString().toLowerCase().includes(normalizedSearchFilter) ||
				normalize(su.address.l6.split(' ').slice(1).toString()).includes(
					normalizedSearchFilter
				) ||
				convertSUStateInToDo(getLastState(su).type)
					.value.toLowerCase()
					.includes(normalizedSearchFilter) ||
				normalize(su.campaign).includes(normalizedSearchFilter)
			);
		}

		return true;
	};

	const filterByCampaign = (su) => {
		if (campaignFilter.length > 0) {
			return campaignFilter.includes(su.campaign.toString());
		}

		return true;
	};

	const filterByToDo = (su) => {
		if (toDoFilter.length > 0) {
			return toDoFilter.includes(
				convertSUStateInToDo(getLastState(su).type).order.toString()
			);
		}
		return true;
	};
	const filterByPriority = (su) => {
		if (priorityFilter === true) {
			return su.priority;
		}
		return true;
	};

	const filteredSU = surveyUnits
		.filter((unit) => filterByPriority(unit))
		.filter((unit) => filterByToDo(unit))
		.filter((unit) => filterByCampaign(unit));

	const totalEchoes = surveyUnits.length;
	const searchFilteredSU = filteredSU.filter((unit) => filterBySearch(unit));
	const matchingEchoes = searchFilteredSU.length;

	return { searchFilteredSU, totalEchoes, matchingEchoes };
};
