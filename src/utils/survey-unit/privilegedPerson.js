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
