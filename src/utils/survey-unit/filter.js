import { getPrivilegedPerson } from 'utils/survey-unit';
import { normalize } from './normalize';

export const getLastState = (ue) => {
	if (Array.isArray(ue.states) && ue.states.length === 1) return ue.states[0];
	if (Array.isArray(ue.states) && ue.states.length > 1) {
		return ue.states.reduce((a, b) => (a.date > b.date ? a : b));
	}
	return false;
};

export const applyFilters = (surveyUnits, filters) => {
	const {
		textSearch: searchFilter,
		campaigns: campaignFilter,
		priority: priorityFilter,
		favorites: favoriteFilter,
	} = filters;

	const filterBySearch = (su) => {
		const { firstName, lastName } = getPrivilegedPerson(su.persons);
		if (searchFilter !== '') {
			const normalizedSearchFilter = normalize(searchFilter);
			return (
				normalize(firstName).includes(normalizedSearchFilter) ||
				normalize(lastName).includes(normalizedSearchFilter) ||
				su.id.toString().toLowerCase().includes(normalizedSearchFilter) ||
				normalize(su.address.l6.split(' ').slice(1).toString()).includes(
					normalizedSearchFilter
				) ||
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

	const filterByPriority = (su) => {
		if (priorityFilter === true) {
			return su.priority;
		}
		return true;
	};

	const filterByFavorite = (su) => {
		if (favoriteFilter.length > 0) {
			return favoriteFilter.includes(parseInt(su.id));
		}
		return true;
	};

	const filteredSU = surveyUnits
		.filter((unit) => filterByCampaign(unit))
		.filter((unit) => filterByPriority(unit))
		.filter((unit) => filterByFavorite(unit));

	const searchFilteredSU = filteredSU.filter((unit) => filterBySearch(unit));

	return searchFilteredSU;
};
