import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import OutlineButton from '../UI/OutlineButton';
import { Colors } from '../../constants/Colors';

const LocationPicker = () => {
	const locateUserHandler = () => {};

	const pickMapHandler = () => {};

	return (
		<View>
			<View style={styles.mapPreview}></View>
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
    mapPreview:{
        width:"100%",
        height:200,
        marginVertical:8,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: Colors.primary100,
        borderRadius:4,
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
    },
});

export default LocationPicker;
