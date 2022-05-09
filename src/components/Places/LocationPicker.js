import React, { useState, useEffect } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { useNavigation, useRoute, useIsFocused } from '@react-navigation/native';
import OutlineButton from '../UI/OutlineButton';
import { Colors } from '../../constants/Colors';
import Geolocation from '@react-native-community/geolocation';
import { getMapPreview } from '../../util/location';

const LocationPicker = () => {
	const [ pickLocation, setPickLocation ] = useState();

	const navigation = useNavigation();
	const route = useRoute();
	const isFocused = useIsFocused();

	useEffect(()=>{

		if(isFocused && route.params) {
			const mapPickedLocation = { 
				lat: route.params.pickedLat, 
				lng: route.params.pickedLng 
			};
			setPickLocation(mapPickedLocation);
		}

		
	},[isFocused, route])

	const locateUserHandler = () => {
		const location = Geolocation.getCurrentPosition(
			(info) => {
				setPickLocation({ lat: info.coords.latitude, lng: info.coords.longitude });
				//console.log('Lng:' + info.coords.longitude + ' Ltd:' + info.coords.latitude);
			},
			(error) => console.log('Error : ' + error),
			{
				enableHighAccuracy: true,
				timeout: 2000,
				maximumAge: 3600000
			}
		);
	};

	const pickMapHandler = () => {
		navigation.navigate('Map');
	};

	let mapPreview = <Text>Location not picked yet - please select location!</Text>;

	if (pickLocation) {
		mapPreview = <Text>{"Longitude: "+ pickLocation.lng + "\nLatitude: "+ pickLocation.lat}</Text>;
	}

	return (
		<View>
			<View style={styles.mapPreview}>{mapPreview}</View>
			<View style={styles.buttonContainer}>
				<OutlineButton icon="location" onSelect={locateUserHandler}>
					Locate User
				</OutlineButton>
				<OutlineButton icon="map" onSelect={pickMapHandler}>
					Pick on Map
				</OutlineButton>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	mapPreview: {
		width: '100%',
		height: 200,
		marginVertical: 8,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primary100,
		borderRadius: 4
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	mapImage: {
		width: '100%',
		height: '100%'
	}
});

export default LocationPicker;
