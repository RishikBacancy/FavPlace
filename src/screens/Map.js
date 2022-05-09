import React, { useLayoutEffect, useState,useCallback } from 'react';
import { StyleSheet, Alert } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import IconButton from '../components/UI/IconButton';

const Map = ({ navigation }) => {

	const [ location, setLocation ] = useState();

	const region = {
		latitude: 23.049813333333336,
		longitude: 72.50141,
		latitudeDelta: 0.015,
		longitudeDelta: 0.0121
	};

	const setlocationHandler = (event) => {
		const lat = event.nativeEvent.coordinate.latitude;
		const lng = event.nativeEvent.coordinate.longitude;

		setLocation({ lat: lat, lng: lng });
	};

	const savedPickedLocation = useCallback(() => {
		if (!location) {
			Alert.alert('No location picked!', 'You have to pick a location(by tapping on Map!');

			return;
		}

        console.log("Lat : "+ location.lat, " lng : "+ location.lng);

		navigation.navigate('AddPlace', {
			pickedLat: location.lat,
			pickedLng: location.lng
		});

	}, [navigation, location]);

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: ({ tintColor }) => (
				<IconButton 
                    icon="save" 
                    size={24} 
                    color={tintColor} 
                    onSelect={savedPickedLocation} />
			),
		});
	}, [navigation, savedPickedLocation]);

	return (
		<MapView style={styles.mapView} initialRegion={region} onPress={setlocationHandler}>
			{location && (
				<Marker
					title="Picked Location"
					pinColor="red"
					coordinate={{ latitude: location.lat, longitude: location.lng }}
				/>
			)}
		</MapView>
	);
};

const styles = StyleSheet.create({
	mapView: {
		flex: 1
	}
});

export default Map;
