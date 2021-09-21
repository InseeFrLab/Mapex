export const getPrivilegedPerson = (persons) => {
	/**
	 * Function to get the first privileged contact
	 */
	if (persons) {
		const found = persons.find((p) => p.privileged === true);
		if (found) {
			return found;
		} else {
			return persons[0];
		}
	}
};

export const getFavoriteNumber = (phoneNumbers) => {
	// TODO Control -> If no favorite
	// and format to display
	if (phoneNumbers) {
		const phone = phoneNumbers.find((p) => p.favorite === true);
		return phone.number;
	}
};
