import SQLite from 'react-native-sqlite-storage';
import { Place } from '../model/Place';

const database = SQLite.openDatabase(
	{ name: 'place.db', location: 'default' },
	() => {},
	(error) => {
		console.log(error);
	}
);

export const init = () => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(`CREATE TABLE IF NOT EXISTS places (
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL
            )`);
		}),
			[],
			() => {
				resolve();
			},
			(_, error) => {
				reject(error);
			};
	});

	return promise;
};

export const insertPlace = (place) => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`INSERT INTO places (title, imageUri, lat, lng) VALUES ( ?, ?, ?, ? )`,
				[ place.title, place.imageUri, place.location.lat, place.location.lng ],
				(_, result) => {
					//console.log(result);
					resolve(result);
				},
				(_, error) => {
					reject(error);
				}
			);
		});
	});

	return promise;
};

export const fetchPlaces = () => {
	const promise = new Promise((resolve, reject) => {
		database.transaction((tx) => {
			tx.executeSql(
				`SELECT * FROM places`,
				[],
				(_, result) => {
					
					const  places = [];

					for(let i=0; i < result.rows.length; i++){
						//console.log(result.rows.item(i).imageUri);

						const rowData = result.rows.item(i);

						places.push(new Place(rowData.id, rowData.title, rowData.imageUri, { lat : rowData.lat, lng: rowData.lng}));
					}

					//console.log(places);


					resolve(places);
				},
				(_, error) => {
					console.log(error);
					reject(error);
				}
			);
		});
	});

	return promise;
};
