import db from '../db';

export const setDataIntoDB = (tableName, data) => {
	data.map((unit) => {
		const table = db.table(tableName);
		addOrUpdate(table, unit);
	});
};

const addOrUpdate = async (table, item) => {
	if (item.id) {
		if ((await table.get(item.id)) === undefined) {
			console.log(item);
			return table.add(item);
		}
		return table.update(item);
	}
	return 0;
};
