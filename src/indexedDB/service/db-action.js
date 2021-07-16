import { getLatLng } from 'utils/geocode/geocode';
import db from '../db';

export const setDataIntoDB = (tableName, data) => {
	const table = db.table(tableName);
	data.map((unit) =>
		getLatLng(`${unit.address.l4} ${unit.address.l6}`).then((res) => {
			const { lat, lng } = res;
			unit.address['lat'] = lat;
			unit.address['lng'] = lng;
			return addOrUpdate(table, unit);
		})
	);
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
export const update = (tableName, item) => {
	return db.table(tableName).update(item.id, item);
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
