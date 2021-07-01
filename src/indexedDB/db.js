import Dexie from 'dexie';
import schema from './schema.json';

export const initDb = () => {
	const db = new Dexie('Mapex');
	db.version(1).stores(schema);
	return db;
};

export default initDb;
