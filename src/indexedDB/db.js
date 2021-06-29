import Dexie from 'dexie';
import schema from './schema.json';

const db = new Dexie('Mapex');

db.version(1).stores(schema);

export default db;