import db from '../db';

const addOrUpdate = async (name,item) => {
	if (item.id) {
		if ((await db.name.get(item.id)) === undefined) {
			return db.name.add(item);
		}
		return db.name.update(item);
	}
	return 0;
};



