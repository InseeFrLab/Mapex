import { getGeoloc } from 'api/remote';
import db from '../db';

export const setDataIntoDB = (tableName, data) => {
	const table = db.table(tableName);
	data.map((unit) => addOrUpdate(table, unit));
};

const addOrUpdate = async (table, item) => {
	if (item.id) {
		if ((await table.get(item.id)) === undefined) {
			return table.add(item);
		}
		return table.update(item.id, item);
	}
	return 0;
};

export const getById = (tableName, id) => {
	return db.table(tableName).get(id);
};

export const getAll = (tableName) => {
	return db.table(tableName).toArray();
};

export const getValuesOfKey = (tableName, key) => {
	return db.table(tableName).orderBy(key).uniqueKeys();
};
