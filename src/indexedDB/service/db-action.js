import db from '../db';

export const setDataIntoDB = (tableName, data) => {
	const table = db.table(tableName);
	data.map((unit) => addOrUpdate(table, unit));
};

const addOrUpdate = async (table, item) => {
	if (item.id) {
		console.log(item)
		if ((await table.get(item.id)) === undefined) {
			return table.add(item);
		}
		return table.update(item.id,item);
	}
	return 0;
};
